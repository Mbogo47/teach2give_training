import { Router } from "express";
import {
  Home,
  createNewNotes,
  getAllNotes,
  getSpecificNote,
  softDeleteNote,
  updateNote,
} from "../controllers/notes.controllers";

const noteRouters = Router();

noteRouters.get("/", Home);
noteRouters.get("/notes", getAllNotes);
noteRouters.post("/notes", createNewNotes);
noteRouters.get("/notes/:id", getSpecificNote);
noteRouters.patch("/notes/:id", softDeleteNote);
noteRouters.put("/notes/:id", updateNote);

export default noteRouters;
