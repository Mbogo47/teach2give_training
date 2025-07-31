import { Router } from "express";
import {
  getDeletedNoteCount,
  getMyNoteCount,
  getNoteCount,
} from "../controllers/count.controllers";
const countRouters = Router();
countRouters.get("/notes/count", getNoteCount);
countRouters.get("/mynotes/count", getMyNoteCount);
countRouters.get("/delnotes/count", getDeletedNoteCount);

export default countRouters;
