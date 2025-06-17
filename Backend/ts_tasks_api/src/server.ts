import express from 'express';
import dotenv from "dotenv";
import { Request, Response } from "express";    
dotenv.config();

const app = express();

app.use(express.json());

// home
app.get("/", (req:Request, res:Response) => {
    res.send("Welcome to the Task Manager API!");
});

const PORT = process.env.port || 4000
app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`)
})