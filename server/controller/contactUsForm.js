import { z } from "zod";
import { User } from "../db";
import { sendMail } from "../utils/mailSender";

const userValidator = z.object({
    name: z.string().name(),
    email: z.string().email(),
    number: z.number().number(),
    message: z.string().message()
})

async function contactUsForm(req, res){

    try{

        const parsedData = userValidator.safeParse(req.body);

        if(!parsedData.success){
            return res.status(400).json({
                message: "Invalid Input Format"
            })
        }

        const { name, email, number, message } = parsedData;

        const sender = await User.create({
            name: name,
            email: email,
            number: number,
            message: message
        });

        const senderId = sender._id;

        console.log(senderId);

        await sendMail(
            process.env.MY_EMAIL,
            "Contact Form Message",
            `You got a message from ${name}
            
            Name: ${name}
            Email: ${email}
            Phone Number: ${number}
            Message: ${message}`
        );

        res.json({
            success: true,
            senderId: senderId
        })
    }
    catch(e){
        console.error("Contact form error:", e);
        res.status(500).json({
            success: false,
            message: "Server Error"
        })
    }

}

export {
    contactUsForm
}