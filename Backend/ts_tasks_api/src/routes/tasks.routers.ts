import { Router } from "express";

import {
  getAllTasks,
  getSpecificTask,
  updateTask,
  createNewTask,
  deleteTask,
  home
} from "../controllers/tasks.controllers";

const router = Router();
router.get('/', home);
router.get('/tasks/:id', getSpecificTask as any);
router.get('/tasks', getAllTasks);
router.post('/tasks', createNewTask);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);

export default router