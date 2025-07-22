import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

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
  const noteId = req.params.id;

  try {
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
        authorId: "69f9a926-4096-4b4f-9c75-d25c65649315",
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
