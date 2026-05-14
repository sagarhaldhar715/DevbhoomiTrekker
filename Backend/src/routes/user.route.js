import express from "express";
import { createUserController } from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.route("/create-user").post(createUserController);

export default userRouter;