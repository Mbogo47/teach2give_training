import { Request, Response } from "express";
import { PrismaClient, Prisma } from "@prisma/client";

const client = new PrismaClient();

// Home route
export const home = (_req: Request, res: Response) => {
  res.send("Welcome to the Bloggy Server!");
};

// Create a blog post
export const createBlogs = async (req: Request, res: Response) => {
  try {
    const { title, content, authorId } = req.body;

    if (!title || !content || !authorId) {
      return res
        .status(400)
        .json({ error: "Title, content, and authorId are required." });
    }

    const blog = await client.blog.create({
      data: {
        title,
        content,
        author: {
          connect: { id: authorId },
        },
      },
    });

    res.status(201).json(blog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create blog post." });
  }
};

// Get all blogs
export const getAllBlogs = async (_req: Request, res: Response) => {
  try {
    const blogs = await client.blog.findMany({
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
      //   orderBy: { createdAt: "desc" },
    });

    res.json(blogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch blogs." });
  }
};
