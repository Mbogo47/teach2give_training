import express from 'express';
import dotenv from "dotenv";
import router from './routes/tasks.routers.ts'
dotenv.config();

const app = express();

app.use(express.json());
app.use('/', router)

const PORT = process.env.port || 4000
app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`)
})