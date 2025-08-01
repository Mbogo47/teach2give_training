import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
// import { uploadImageToAzure } from "../utils/azureUtils";
import { uploadImageToCloudinary } from "../utils/cloudinaryUtils";

const client = new PrismaClient();

// HOME CONTROLLER
export const Home = (_req: Request, res: Response) => {
  res.sendStatus(200);
};

// CREATE NEW NOTE CONTROLLER

export const createNewNotes = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]?.trim();
    if (!token) return res.status(401).json({ error: "Missing token" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      userId: string;
    };
    const authorId = decoded.userId;

    const { title, synopsis, content } = req.body;

    let imageUrls: string[] = [];

    if (Array.isArray(req.files)) {
      const uploads = await Promise.all(
        req.files.map((file) =>
          uploadImageToCloudinary(file.buffer, file.originalname),
        ),
      );
      imageUrls = uploads;
    }

    const newNote = await client.note.create({
      data: {
        title,
        synopsis,
        content,
        notesImage: imageUrls,
        authorId,
      },
    });

    res.status(201).json({ message: "New note created", newNote });
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
      where: { isDeleted: false, isPublic: true },
      include: {
        author: {
          select: {
            id: true,
            username: true,
            emailAddress: true,
            firstName: true,
            lastName: true,
            avatarImage: true,
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
            username: true,
            emailAddress: true,
            firstName: true,
            lastName: true,
            avatarImage: true,
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

// Get my notes
export const getMyNotes = async (
  req: Request,
  res: Response,
): Promise<void> => {
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

    const notes = await client.note.findMany({
      where: {
        authorId: userId,
        isDeleted: false,
      },
      orderBy: { createdAt: "desc" },
      include: {
        author: {
          select: {
            id: true,
            username: true,
            emailAddress: true,
            firstName: true,
          },
        },
      },
    });

    res.json(notes);
  } catch (error) {
    console.error(error);
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

    const { title, content, synopsis } = req.body;

    let imageUrls: string[] = [];

    if (Array.isArray(req.files)) {
      const uploads = await Promise.all(
        req.files.map((file) =>
          uploadImageToCloudinary(file.buffer, file.originalname),
        ),
      );
      imageUrls = uploads;
    }

    const existingNote = await client.note.findUnique({
      where: { id: noteId },
    });

    if (!existingNote || existingNote.isDeleted) {
      res.status(404).json({ error: "Note not found or has been deleted" });
      return;
    }

    const updatedNote = await client.note.update({
      where: {
        id: noteId,
        authorId: decoded.userId,
      },
      data: {
        title,
        content,
        synopsis,
        ...(imageUrls.length > 0 && { notesImage: imageUrls }),
      },
    });

    res.status(200).json({ message: "Updated Note successfully", updatedNote });
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

//private notes
export const makePrivateNote = async (
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
    const privateNote = await client.note.update({
      where: {
        id: noteId,
        authorId: decoded.userId,
      },
      data: {
        isPublic: false,
      },
    });
    res.status(200).json({ message: "Note Made Private", privateNote });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};

