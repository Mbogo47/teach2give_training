import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const client = new PrismaClient();

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, username , emailAddress, password } = req.body;

    if (! firstName || !lastName || !username || !emailAddress || !password) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const existingUser = await client.user.findFirst({
      where: {
        OR: [{ emailAddress }, { username }],
      },
    });

    if (existingUser) {
      return res
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

    res
      .status(201)
      .json({
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
