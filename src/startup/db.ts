import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const connectDb = () => {
    try {
        const db = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.a50qi.mongodb.net/?retryWrites=true&w=majority`
        mongoose.connect(db);
        console.info("Connected to database...");
    } catch (error: any) {
        console.error(error.message);
    }
};

export default connectDb;
