import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const client = new PrismaClient();

export const registerUser = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { firstName, lastName, emailAddress, username, password } = req.body;

    if (!firstName || !lastName || !username || !emailAddress || !password) {
      res.status(400).json({ error: "All fields required" });
      return;
    }

    const existingUser = await client.user.findFirst({
      where: {
        OR: [{ emailAddress }, { username }],
      },
    });

    if (existingUser) {
      res.status(400).json({ error: "Username or Email already exists" });
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
      user: {
        id: user.id,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};

// Login Logic
export const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { identifier, password } = req.body;
    if (!password || !identifier) {
      res.status(400).json({ error: "Username or Email required" });
      return;
    }

    const user = await client.user.findFirst({
      where: {
        OR: [{ username: identifier }, { emailAddress: identifier }],
      },
    });

    if (!user) {
      res.status(401).json({ error: "User Not found" });
      return;
    }

    const comparePassword = await bcrypt.compare(password, user.password);

    if (!comparePassword) {
      res.status(401).json({ error: "Invalid Password" });
    }

    res.status(200).json({
      message: "Login Successful",
      user: { id: user.id },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};
