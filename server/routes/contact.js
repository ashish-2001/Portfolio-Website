import express from "express";
import { contactUsForm } from "../controllers/contactUsForm";

const router = express.Router();

router.post("/contact", contactUsForm);

export {
    router
}