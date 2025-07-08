import { Router } from "express";
import { registerUser } from "../controllers/user.controllers";

const authrouter = Router();

authrouter.post("/auth/register", registerUser as any);

export default authrouter;
