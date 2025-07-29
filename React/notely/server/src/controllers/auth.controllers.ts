import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { uploadImageToAzure } from "../utils/azureUtils";
dotenv.config();

const client = new PrismaClient();

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { username, firstName, lastName, emailAddress, password } = req.body;

    const existingUser = await client.user.findFirst({
      where: {
        OR: [{ username }, { emailAddress }],
      },
    });

    if (existingUser) {
      return res
        .status(400)
        .json({ error: "Username or email already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await client.user.create({
      data: {
        username,
        firstName,
        lastName,
        emailAddress,
        password: hashedPassword,
      },
    });

    res.status(201).json({ message: "User registered", userId: newUser.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};

// Login Logic
export const loginUser = async (req: Request, res: Response) => {
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
      return res.status(401).json({ error: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid Password" });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
      expiresIn: "2h",
    });

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        username: user.username,
        emailAddress: user.emailAddress,
        firstName: user.firstName,
        lastName: user.lastName,
        avatarImage: user.avatarImage,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};

// UPDATE USER
export const updateProfileInfo = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      userId: string;
    };

    const { firstName, lastName, username } = req.body;
    const avatarFile = req.file;

    if (!firstName || !lastName || !username) {
      res.status(400).json({ error: "Missing required fields" });
      return;
    }

    const existingUser = await client.user.findUnique({
      where: { id: decoded.userId },
    });

    if (!existingUser) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    let avatarImageUrl = existingUser.avatarImage;

    if (avatarFile) {
      avatarImageUrl = await uploadImageToAzure(
        avatarFile.buffer,
        avatarFile.originalname,
      );
    }

    const updatedUser = await client.user.update({
      where: { id: decoded.userId },
      data: {
        firstName,
        lastName,
        username,
        avatarImage: avatarImageUrl,
      },
    });

    res.status(200).json({ message: "User profile updated", updatedUser });
  } catch (err) {
    console.error("Error updating user profile:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
};

// UPDATE PASSWORD
export const updatePassword = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      userId: string;
    };

    const { newPassword } = req.body;

    const user = await client.user.findUnique({
      where: { id: decoded.userId },
    });

    if (!user || !user.password) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await client.user.update({
      where: { id: decoded.userId },
      data: { password: hashedPassword },
    });

    res.status(200).json({ message: "Password updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update password" });
  }
};

// GET USER PROFILE INFO
export const getUserProfileInfo = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      userId: string;
    };

    const user = await client.user.findUnique({
      where: { id: decoded.userId },
    });

    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    res.json({
      id: user.id,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      emailAddress: user.emailAddress,
      // notesCount: user.note.length,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
