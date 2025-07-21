import { Router } from "express";
import { Home, getAllNotes } from "../controllers/notes.controllers";

const noteRouters = Router();

noteRouters.get("/", Home);
noteRouters.get("/notes", getAllNotes);
export default noteRouters;
