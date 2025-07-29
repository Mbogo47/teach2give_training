import { Router } from "express";
import {
  Home,
  createNewNotes,
  getAllNotes,
  getMyNotes,
  getSpecificNote,
  softDeleteNote,
  updateNote,
} from "../controllers/notes.controllers";
import multer from "multer";
const upload = multer();

const noteRouters = Router();

noteRouters.get("/ping", Home);
noteRouters.get("/notes", getAllNotes);
noteRouters.post("/notes", upload.single("notesImage"), createNewNotes);
noteRouters.get("/notes/:id", getSpecificNote);
noteRouters.patch("/notes/:id", softDeleteNote);
noteRouters.put("/notes/:id", upload.single("notesImage"), updateNote);
noteRouters.get("/my-notes", getMyNotes);

export default noteRouters;
