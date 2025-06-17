import express from "express";
import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

const client = new PrismaClient();


// home
app.get("/", (req, res) => {
  res.send("Welcome to the Posts API!");
});

// Get all users
app.get("/users", async (req, res) => {
  try {
    const users = await client.user.findMany();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Get a single user
app.get("/users/:id", async (req, res) => {
  const user = await client.user.findUnique({
    where: { id: req.params.id },
  });
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
});

// Creating a new user
app.post('/users', async (req, res) => {
  try {
    const user = await client.user.create({
        data: {
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
          emailAddress: faker.internet.email(),
          username: faker.internet.username(),
        },
    });

    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Get all posts with author details
app.get("/posts", async (req, res) => {
  try {
    const posts = await client.post.findMany({
      where: { isDeleted: false },
      include: { user: true }
    });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Get specific post with author details
app.get("/posts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const post = await client.post.findUnique({
      where: { id },
      include: { user: true }
    });
    if (!post || post.isDeleted == true) return res.status(404).json({ error: "Post not found" });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Create new post
app.post("/posts", async (req, res) => {
  const { userId} = req.body;
  try {
    const post = await client.post.create({
      data: {
        userId,
        title: faker.lorem.sentence(),
        content: faker.lorem.paragraphs(2),
      },
    });
    res.status(201).json(post);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Something went wrong" });
  }
});

//  Update post
app.put("/posts/:id", async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const updated = await prisma.post.update({
      where: { id },
      data: { title, content },
    });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Soft delete (set isDeleted to true)
app.delete("/posts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await prisma.post.update({
      where: { id },
      data: { isDeleted: true },
    });
    res.json({ message: "Post soft deleted", deleted });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});



const port = 4000 || process.env.PORT;

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
