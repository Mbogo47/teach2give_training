import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
const client = new PrismaClient();

// HOME CONTROLLER
export const Home = (_req: Request, res: Response) => {
  res.send("Welcome to the Bloggy Server!");
};

// CREATE NEW NOTE CONTROLLER
export const createNewNotes = async (
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

    const authorId = decoded.userId;

    const { title, synopsis, content, notesImage = [] } = req.body;

    const newNote = await client.note.create({
      data: {
        title,
        synopsis,
        content,
        notesImage,
        authorId: authorId,
      },
    });

    res.status(200).json({ message: "New note created", newNote });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};

// GET ALL NOTES CONTROLLERS
export const getAllNotes = async (
  _req: Request,
  res: Response,
): Promise<void> => {
  try {
    const notes = await client.note.findMany({
      where: { isDeleted: false },
      include: {
        author: {
          select: {
            id: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    res.status(200).json(notes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};

// GET SPECIFIC NOTE
export const getSpecificNote = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const noteId = req.params.id;

    const note = await client.note.findUnique({
      where: { id: noteId },
      include: {
        author: {
          select: {
            id: true,
          },
        },
      },
    });

    if (!note || note.isDeleted === true) {
      res.status(404).json({ error: "Note not found" });
      return;
    }

    res.status(200).json(note);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};

// UPDATE A NOTE
export const updateNote = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const noteId = req.params.id;

    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      res.status(401).json({ error: "Missing token" });
      return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      userId: string;
    };

    const { title, content, synopsis, notesImage = [] } = req.body;

    const existingNote = await client.note.findUnique({
      where: { id: noteId },
    });
    if (!existingNote || existingNote.isDeleted) {
      res.status(404).json({ error: "Note not found or has been deleted" });
      return;
    }

    const updateNote = client.note.update({
      where: {
        id: noteId,
        authorId: decoded.userId,
      },
      data: {
        title,
        content,
        synopsis,
        notesImage,
      },
    });

    res.status(200).json({ message: "Updated Note successfully", updateNote });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};

// SOFT DELETE
export const softDeleteNote = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const noteId = req.params.id;
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      res.status(401).json({ error: "Missing token" });
      return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      userId: string;
    };

    const existingNote = await client.note.findUnique({
      where: { id: noteId },
    });

    if (!existingNote || existingNote.isDeleted) {
      res.status(404).json({ error: "Note not found or has been deleted" });
      return;
    }
    const deleteNote = await client.note.update({
      where: {
        id: noteId,
        authorId: decoded.userId,
      },
      data: {
        isDeleted: true,
      },
    });
    res.status(200).json({ message: "Note Deleted", deleteNote });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};
