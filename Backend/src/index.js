import server from "./app.js";
import connectDB from "./utils/db.connect.js";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 8000;

connectDB();

// server connected here ......
server.listen(port, () => {
    console.log("Server is running on port:", port);
});

