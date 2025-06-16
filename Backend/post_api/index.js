import express from "express";
import { PrismaClient } from "@prisma/client";
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
  const users = await client.post
  res.json(users);
});

// Get a single user
app.get("/users/:id", async (req, res) => {
  const user = await client.post.findUnique({
    where: { id: req.params.id },
  });
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
});


const port = 4000 || process.env.PORT;

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
