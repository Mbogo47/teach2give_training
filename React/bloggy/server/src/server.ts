import express from 'express'
import dotenv from 'dotenv'
import blogrouter from "./routers/blogs.routers";
import authrouter from "./routers/user.routers";

dotenv.config()

const app = express()

app.use(express.json());
app.use("/", blogrouter);
app.use("/", authrouter);

const PORT = process.env.port || 4000;
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
