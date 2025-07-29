import { Router } from "express";
import {
  registerUser,
  loginUser,
  updateProfileInfo,
  updatePassword,
  getUserProfileInfo,
} from "../controllers/auth.controllers";
import multer from "multer";
const upload = multer();

const authRouters = Router();

authRouters.post("/auth/register", registerUser);
authRouters.post("/auth/login", loginUser);
authRouters.put("/user", upload.single("avatarImage"), updateProfileInfo);
authRouters.patch("/password", updatePassword);
authRouters.get("/user", getUserProfileInfo);

export default authRouters;
