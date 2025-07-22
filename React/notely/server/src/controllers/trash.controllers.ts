import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
const client = new PrismaClient();

// GET TRASH
export const getAllTrash = async (
  _req: Request,
  res: Response,
): Promise<void> => {
  try {
    const trash = await client.note.findMany({
      where: { isDeleted: true },
      include: {
        author: {
          select: {
            id: true,
            username: true,
            emailAddress: true,
            firstName: true,
            password: true,
          },
        },
      },

      orderBy: { createdAt: "desc" },
    });

    res.status(200).json(trash);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};

// Restore Trash
export const restoreFromTrash = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      res.status(401).json({ error: "Missing token" });
      return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      userId: string;
    };

    const noteId = req.params.id;

    const existingNote = await client.note.findUnique({
      where: { id: noteId },
    });

    if (!existingNote) {
      res.status(404).json({ error: "Note not found" });
      return;
    }

    const restoreNote = await client.note.update({
      where: {
        id: noteId,
        authorId: decoded.userId,
      },
      data: {
        isDeleted: false,
      },
    });

    res.status(200).json({ message: "Note Restored", restoreNote });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};
