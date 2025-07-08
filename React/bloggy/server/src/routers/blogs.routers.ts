import { Router } from "express";
import { createBlogs, getAllBlogs, home } from "../controllers/blogs.controllers";

const blogrouter = Router();

blogrouter.get("/", home);
blogrouter.get("/blogs", getAllBlogs);
blogrouter.post("/blogs", createBlogs as any);

export default blogrouter;
