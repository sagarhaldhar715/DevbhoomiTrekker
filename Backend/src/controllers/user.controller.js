import { createUserService } from "../services/user.service.js";
import asyncHandler from "../utils/catchAsync.js";

export const createUserController = asyncHandler(async (req, res) => {
    const response = await createUserService(req?.body);
    res.status(response.statusCode).json(response);
});