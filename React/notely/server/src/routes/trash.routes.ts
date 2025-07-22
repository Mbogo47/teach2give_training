import { Router } from "express";
import {
  getAllTrash,
  restoreFromTrash,
} from "../controllers/trash.controllers";

const trashRouters = Router();

trashRouters.get("/notes/trash", getAllTrash);
trashRouters.patch("/notes/restore/:id", restoreFromTrash);

export default trashRouters;
