import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

const client = new PrismaClient();
export const getUserCount = async (_req: Request, res: Response) => {
  try {
    const count = await client.user.count();
    res.json({ count });
  } catch (err) {
    console.error("Error counting users:", err);
    res.status(500).json({ error: "Error counting users" });
  }
};

export const getNoteCount = async (_req: Request, res: Response) => {
  try {
    const count = await client.note.count({ where: { isDeleted: false } });
    res.json({ count });
  } catch (err) {
    console.error("Error counting notes:", err);
    res.status(500).json({ error: "Error counting notes" });
  }
};

export const getMyNoteCount = async (req: Request, res: Response) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    res.status(401).json({ error: "Missing token" });
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      userId: string;
    };
    const userId = decoded.userId;
    const count = await client.note.count({
      where: { authorId: userId, isDeleted: false },
    });
    res.json({ count });
  } catch (err) {
    console.error("Error counting notes:", err);
    res.status(500).json({ error: "Error counting notes" });
  }
};

export const getDeletedNoteCount = async (req: Request, res: Response) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    res.status(401).json({ error: "Missing token" });
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      userId: string;
    };
    const userId = decoded.userId;
    const count = await client.note.count({
      where: { authorId: userId, isDeleted: true },
    });
    res.json({ count });
  } catch (err) {
    console.error("Error counting notes:", err);
    res.status(500).json({ error: "Error counting notes" });
  }
};
