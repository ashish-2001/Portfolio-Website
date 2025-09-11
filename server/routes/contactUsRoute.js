import  express from "express";

const router = express.Router();

router.post("/contact", contactUsForm);

export {
    router
}
