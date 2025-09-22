import  express from "express";
import { contactUsForm } from "../controller/contactUsForm.js";

const router = express.Router();

router.post("/contact", contactUsForm);

export {
    router
}
