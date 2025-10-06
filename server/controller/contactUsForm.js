import { z } from "zod";
import { User } from "../db.js";
import { sendMail } from "../utils/mailSender.js";

const userValidator = z.object({
    senderName: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email format"),
    phoneNumber: z.string().regex(/^[0-9]{10}$/, "Contact number must be valid"),
    message: z.string().min(1, "Message is required")
})

async function contactUsForm(req, res){

    try{

        const parsedResult = userValidator.safeParse(req.body);

        if(!parsedResult.success){
            return res.status(400).json({
                success: false,
                message: "Invalid Input Format",
                errors: parsedResult.error.errors
            })
        }

        const { senderName, email, phoneNumber, message } = parsedResult.data;

        const sender = await User.create({
            senderName,
            email,
            phoneNumber,
            message
        });

        const senderId = sender._id;

        console.log(senderId);

        await sendMail(
            senderName,
            email,
            phoneNumber,
            message
        );

        return res.status(200).json({
            success: true,
            senderId: senderId,
            message: "Message sent successfully"
        })
    }
    catch(e){
        console.error("Contact form error:", e);
        res.status(500).json({
            success: false,
            message: "Internal server Error",
            error: e.message
        })
    }

}

export {
    contactUsForm
}