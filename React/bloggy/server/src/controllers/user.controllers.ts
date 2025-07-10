import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
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
      res
        .status(409)
        .json({ error: "User with email or username already exists." });
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
        OR: [
          { username: identifier },
          { emailAddress: identifier }
        ],
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
      { expiresIn: '7d' }
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