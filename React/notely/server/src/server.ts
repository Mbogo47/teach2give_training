import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRouters from "./routes/auth.routes";
import noteRouters from "./routes/notes.routes";
import trashRouters from "./routes/trash.routes";
import countRouters from "./routes/count.routes";

dotenv.config();

const app: Express = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "https://notely-virid.vercel.app"],
    credentials: true,
  }),
);

app.use(express.json());
app.use("/", countRouters);
app.use("/", authRouters);
app.use("/", trashRouters);
app.use("/", noteRouters);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
