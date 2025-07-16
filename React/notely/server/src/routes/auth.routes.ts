import { Router } from "express";
import { registerUser, loginUser } from "../controllers/auth.controllers";

const authRouters = Router();

authRouters.post("/auth/register", registerUser);
authRouters.post("/auth/login", loginUser);
export default authRouters;
