import { Router } from "express";
import { registerUser, login } from "../controllers/user.controllers";

const authrouter = Router();

authrouter.post("/auth/register", registerUser);
authrouter.post("/auth/login", login);

export default authrouter;
