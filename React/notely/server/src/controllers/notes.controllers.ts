import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

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
    const { title, synopsis, content, notesImage = [] } = req.body;

    const newNote = await client.note.create({
      data: {
        title,
        synopsis,
        content,
        notesImage,
        authorId: "69f9a926-4096-4b4f-9c75-d25c65649315",
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
            username: true,
            emailAddress: true,
            firstName: true,
            password: true,
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
  const noteId = req.params.id;

  try {
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
  const noteId = req.params.id;
  try {
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
        authorId: "69f9a926-4096-4b4f-9c75-d25c65649315",
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
  const noteId = req.params.id;
  try {
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
        authorId: "69f9a926-4096-4b4f-9c75-d25c65649315",
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
