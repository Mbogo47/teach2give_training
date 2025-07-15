import { Router } from "express";
import {
  createBlogs,
  getAllBlogs,
  home,
  getBlogById,
  getMyBlogs,
  updateBlog,
} from "../controllers/blogs.controllers";
import multer from "multer";
const upload = multer();

// Route setup

const blogrouter = Router();

blogrouter.get("/", home);
blogrouter.get("/blogs", getAllBlogs);
blogrouter.post("/blogs", upload.single("featuredImage"), createBlogs as any);
// blogrouter.post("/blogs", createBlogs as any);
blogrouter.get("/my-blogs", getMyBlogs as any);
blogrouter.get("/blogs/:id", getBlogById as any);
blogrouter.put("/blogs/:id", upload.single("featuredImage"), updateBlog as any);

export default blogrouter;
