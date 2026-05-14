import express from "express";
import userRouter from "./routes/user.route.js";

const server = express();

server.use(express.json());
server.use("/user", userRouter);

export default server;