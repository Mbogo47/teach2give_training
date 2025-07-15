import { Router } from "express";
import {
  registerUser,
  login,
  getUserProfile,
  updateProfile,
} from "../controllers/user.controllers";
import multer from "multer";
const upload = multer();

const authrouter = Router();

authrouter.post("/auth/register", registerUser);
authrouter.post("/auth/login", login);
authrouter.get("/user/profile", getUserProfile as any);
authrouter.put("/user/profile", upload.single("avatar"), updateProfile as any);

export default authrouter;
