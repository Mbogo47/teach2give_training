import express from "express";
import { PrismaClient } from "@prisma/client";
const app = express();
const client = new PrismaClient();

// Get all tasks
// app.post('/')
app.get("/tasks", async (req, res) => {
  const tasks = await client.tasks.findMany();
  res.json(tasks);
});


// Get all tasks
app.get("/tasks", async (req, res) => {
  const tasks = await client.tasks.findMany();
  res.json(tasks);
});

// Get a specific task
app.get("/tasks/:id", async (req, res) => {
  const task = await client.tasks.findUnique({
    where: { id: req.params.id },
  });
  if (!task) return res.status(404).json({ error: "task not found" });
  res.json(task);
});

// Update a task
app.put("/tasks/:id", async (req, res) => {
  const { taskTitle, taskDescription, isCompleted } = req.body;
  try {
    const updatedTask = await prisma.tasks.update({
      where: { id: req.params.id },
      data: { taskTitle, taskDescription, isCompleted },
    });
    res.json(updatedTask);
  } catch (error) {
    res.status(400).json({ error: "Task could not be updated" });
  }
});

// Delete a task
app.delete("/tasks/:id", async (req, res) => {
  try {
    await prisma.tasks.delete({
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
