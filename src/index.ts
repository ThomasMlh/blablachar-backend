import express from "express";
import * as dotenv from "dotenv"
import initCors from "./startup/cors";
import connectDb from "./startup/db";
import routes from "./startup/routes";
dotenv.config()

const PORT = process.env.PORT;

const app = express();

initCors(app);
connectDb();
routes(app)

app.listen(PORT, () => console.log(`Server listen on port ${PORT}`))

