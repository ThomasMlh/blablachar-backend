import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const DB_NAME = process.env.ENV === "PROD" ? process.env.DB_NAME : process.env.DB_DEV_NAME;

const connectDb = () => {
    try {
        const db = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@blablachar.a50qi.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
        mongoose.connect(db);
        console.info("Connected to database...");
    } catch (error: any) {
        console.error(error.message);
    }
};

export default connectDb;
