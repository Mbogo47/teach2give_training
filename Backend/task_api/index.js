import express from "express";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

const client = new PrismaClient();

// home
app.get("/", (req, res) => {
  res.send("Welcome to the Task Manager API!");
});


// Get all tasks
app.get("/tasks", async (req, res) => {
  const tasks = await client.tasks.findMany();
  res.json(tasks);
});

// Get a single task
app.get("/tasks/:id", async (req, res) => {
  const task = await client.tasks.findUnique({
    where: { id: req.params.id },
  });
  if (!task) return res.status(404).json({ error: "task not found" });
  res.json(task);
});

// update
app.patch("/tasks/:id", async (req, res) => {
  const { taskTitle, taskDescription, isCompleted } = req.body;
  try {
    const updatedTask = await client.tasks.update({
      where: { id: req.params.id },
      data: { taskTitle, taskDescription, isCompleted },
    });
    res.json(updatedTask);
  } catch (error) {
    res.status(400).json({ error: "Task could not be updated" });
  }
});

// delete
app.delete("/tasks/:id", async (req, res) => {
  try {
    await client.tasks.delete({
      where: { id: req.params.id },
    });
    res.json({ message: "Task deleted" });
  } catch (error) {
    res.status(400).json({ error: "Task could not be deleted" });
  }
});



let port;

if (process.env.PORT) {
  port = process.env.PORT;
} else {
  port = 4000;
}

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
