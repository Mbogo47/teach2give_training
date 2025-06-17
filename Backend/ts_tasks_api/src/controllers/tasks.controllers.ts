import { Request, Response } from "express";
import { PrismaClient, Prisma } from "@prisma/client";
import { faker } from "@faker-js/faker";

const client = new PrismaClient();

export const getAllTasks = async (_req: Request, res: Response) => {
  try {
    const tasks = await client.tasks.findMany();
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const getSpecificTasks = async (req: Request, res: Response) => {
  const task = await client.tasks.findUnique({
    where: { id: req.params.id },
  });
  if (!task) return res.status(404).json({ error: "task not found" });
  res.json(task);
};

export const createNewTask = async (_req: Request, res: Response) => {
  try {
    const data: Prisma.TasksCreateInput = {
      taskTitle: faker.lorem.sentence(),
      taskDescription: faker.lorem.paragraphs(2),
      isCompleted: false,
    };
    const task = await client.tasks.create({
      data,
    });
    res.status(201).json(task);
  } catch (error) {
    console.log(error);
    res.status(502).json({ error: "Something went wrong" });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    const data: Prisma.TasksCreateInput = {
      taskTitle: faker.lorem.sentence(),
      taskDescription: faker.lorem.paragraphs(2),
      isCompleted: false,
    };
    const updatedTask = await client.tasks.update({
      where: { id: req.params.id },
      data,
    });
    res.json(updatedTask);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Task could not be updated" });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    await client.tasks.delete({
      where: { id: req.params.id },
    });
    res.json({ message: "Task deleted" });
  } catch (error) {
    res.status(400).json({ error: "Task could not be deleted" });
  }
};
