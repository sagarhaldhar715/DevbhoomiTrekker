import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const mongoConnectionString = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(mongoConnectionString);
        console.log("Data base connected successfully");
    } catch (error) {
        console.log("Error in connectDB:", error.message || error.data || error);
    }
};

export default connectDB;