import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const mongoUri = process.env.MONGODB_URI || process.env.MONGO_URI;

        if (!mongoUri) {
            throw new Error("MONGODB_URI or MONGO_URI is not defined in the environment.");
        }

        const connectionInstance = await mongoose.connect(
            `${mongoUri}/${DB_NAME}`
        );

        console.log(
            `MongoDB connected: ${connectionInstance.connection.host}`
        );
    } catch (err) {
        console.error("MongoDB connection failed:", err);
        process.exit(1);
    }
};

export default connectDB;