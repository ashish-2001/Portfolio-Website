import dotenv from "dotenv";
import express from "express";
import cors from "cors";
dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json());

app.use(cors({
    origin: "*",
    credentials: true
}));

app.listen(PORT, () =>{
    console.log(`App listening on port ${PORT}`)
});