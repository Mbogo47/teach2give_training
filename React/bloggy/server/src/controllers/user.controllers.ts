import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { uploadImageToAzure } from "../utils/azureutils";
dotenv.config();

const client = new PrismaClient();

// Sign up logic
export const registerUser = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { firstName, lastName, username, emailAddress, password } = req.body;

    if (!firstName || !lastName || !username || !emailAddress || !password) {
      res.status(400).json({ error: "All fields are required." });
    }

    const existingUser = await client.user.findFirst({
      where: {
        OR: [{ emailAddress }, { username }],
      },
    });

    if (existingUser) {
      res.status(409).json({ error: "Email or username already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await client.user.create({
      data: {
        firstName,
        lastName,
        username,
        emailAddress,
        password: hashedPassword,
      },
    });

    res.status(201).json({
      message: "User created successfully",
      user: { id: user.id, email: user.emailAddress },
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Something went wrong during registration." });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { identifier, password } = req.body;

    if (!password || !identifier) {
      res
        .status(400)
        .json({ error: "Username or email and password are required." });
      return;
    }

    const user = await client.user.findFirst({
      where: {
        OR: [{ username: identifier }, { emailAddress: identifier }],
      },
    });

    if (!user) {
      res.status(401).json({ error: "Invalid credentials." });
      return;
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      res.status(401).json({ error: "Invalid credentials." });
      return;
    }

    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET as string,
      { expiresIn: "2h" },
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        username: user.username,
        emailAddress: user.emailAddress,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong during login." });
  }
};

export const getUserProfile = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Unauthorized" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      userId: string;
    };

    const user = await client.user.findUnique({
      where: { id: decoded.userId },
      include: {
        blogs: {
          where: { isDeleted: false },
        },
      },
    });

    if (!user) return res.status(404).json({ error: "User not found" });

    res.json({
      id: user.id,
      username: user.username,
      firstName: user.firstName,
      emailAddress: user.emailAddress,
      blogCount: user.blogs.length,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update profile
export const updateProfile = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Unauthorized" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      userId: string;
    };

    const { firstName, lastName, emailAddress } = req.body;
    const file = req.file;

    let profileImageUrl;
    if (file) {
      profileImageUrl = await uploadImageToAzure(
        file.buffer,
        file.originalname,
      );
    }

    const updatedUser = await client.user.update({
      where: { id: decoded.userId },
      data: {
        firstName,
        lastName,
        emailAddress,
        ...(profileImageUrl && { profileImage: profileImageUrl }),
      },
    });

    res.json(updatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update profile" });
  }
};
