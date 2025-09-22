import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { router as contactUsRoute} from "./routes/contactUsRoute.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use(cors({
    origin: "*",
    credentials: true
}));

app.use("/reach", contactUsRoute);

mongoose.connect(process.env.MONGO_URL).then(() => console.log("MongoDB Connected"))
.catch((err) => console.error("MongoDB Error:", err))


app.listen(PORT, () =>{
    console.log(`App listening on port ${PORT}`)
});