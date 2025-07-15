import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { uploadImageToAzure } from "../utils/azureutils";

const client = new PrismaClient();

// Home route
export const home = (_req: Request, res: Response) => {
  res.send("Welcome to the Bloggy Server!");
};

import jwt from "jsonwebtoken";

export const createBlogs = async (req: Request, res: Response) => {
  try {
    const { title, content, synopsis } = req.body;
    const file = req.file;

    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Missing token" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      userId: string;
    };
    const authorId = decoded.userId;

    if (!file || !title || !content || !authorId || !synopsis) {
      return res.status(400).json({ error: "Missing fields or image." });
    }

    const imageUrl = await uploadImageToAzure(file.buffer, file.originalname);

    const blog = await client.blog.create({
      data: {
        title,
        content,
        synopsis,
        featuredImageUrl: imageUrl,
        author: {
          connect: { id: authorId },
        },
      },
    });

    return res.status(201).json({ message: "Blog created", blog });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error." });
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
      orderBy: { createdAt: "desc" },
    });

    res.json(blogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch blogs." });
  }
};

// Get a specific blog by ID
export const getBlogById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const blog = await client.blog.findUnique({
      where: { id },
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

    if (!blog || blog.isDeleted) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.json(blog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

// Get MY Blogs
export const getMyBlogs = async (req: Request, res: Response) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Missing token" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      userId: string;
    };
    const userId = decoded.userId;

    const blogs = await client.blog.findMany({
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

    res.json(blogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

// Update blog
export const updateBlog = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, content, synopsis } = req.body;
    const file = req.file;

    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Unauthorized" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      userId: string;
    };

    // Optional: Check ownership here if necessary
    const existingBlog = await client.blog.findUnique({ where: { id } });
    if (!existingBlog) return res.status(404).json({ error: "Blog not found" });

    let imageUrl = existingBlog.featuredImageUrl;
    if (file) {
      imageUrl = await uploadImageToAzure(file.buffer, file.originalname);
    }

    const updatedBlog = await client.blog.update({
      where: { id },
      data: {
        title,
        content,
        synopsis,
        featuredImageUrl: imageUrl,
      },
    });

    return res.status(200).json({ message: "Blog updated", blog: updatedBlog });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update blog." });
  }
};

export const deleteBlog = async (req: Request, res: Response) => {
  const blogId = req.params.id;

  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      userId: string;
    };
  } catch {
    return res.status(401).json({ error: "Invalid token" });
  }

  try {
    const updated = await client.blog.updateMany({
      where: {
        id: blogId,
        authorId: decoded.userId,
      },
      data: {
        isDeleted: true,
      },
    });

    if (updated.count === 0) {
      return res.status(404).json({ message: "Blog not found or not yours" });
    }

    res.json({ message: "Blog soft deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
