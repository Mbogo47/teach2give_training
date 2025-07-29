import { Router } from "express";
import {
  registerUser,
  loginUser,
  updateProfileInfo,
  updatePassword,
  getUserProfileInfo,
} from "../controllers/auth.controllers";

const authRouters = Router();

authRouters.post("/auth/register", registerUser);
authRouters.post("/auth/login", loginUser);
authRouters.put("/user", updateProfileInfo);
authRouters.patch("/password", updatePassword);
authRouters.get("/user", getUserProfileInfo);
export default authRouters;
