import User from "../models/user.model.js";
import ApiError from "../utils/apiError.js";
import httpStatus from "http-status";

export const createUserService = async (body) => {
    try {
        console.log("Req body at createUser:", body);
        const { name, email, phone, password, address } = body;
        if (!name || !email || !phone || !password || !address) {
            throw new ApiError(httpStatus.BAD_REQUEST, "Missing required parameters");
        };

        const user = await User.create(body);
        console.log("User created:", user);

        return {
            statusCode: httpStatus.OK,
            data: user,
            message: "User created successfully"
        }
    } catch (error) {
        console.log("Error in createUser:", error?.message || error?.data || error);
        return {
            statusCode: error?.statusCode ?? httpStatus.INTERNAL_SERVER_ERROR,
            data: null,
            message: error?.message ?? "Failed to create user"
        }
    }
};

// route => controller =>  service