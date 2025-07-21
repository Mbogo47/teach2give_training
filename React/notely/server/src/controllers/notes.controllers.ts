import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export const Home = (_req: Request, res: Response) => {
  res.send("Welcome to the Bloggy Server!");
};

export const getAllNotes = async (
  req: Request,
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
    res.json(notes);
  } catch (err) {}
};
