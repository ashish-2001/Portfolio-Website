import { contactMeForm } from "../mail/templates/ContactMeForm";
import { mailSender } from "../utils/mailSender";

async function contactUsForm(req, res){
    const { senderName, senderEmail, senderPhoneNumber, senderMessage } = req.body;

    try{
        const emailRes = await mailSender(
            
            contactMeForm(senderName, senderEmail, senderPhoneNumber, senderMessage)
        )
        console.log("Email response", emailRes)

        return res.json({
            success: true,
            message: "Message Send Successfully"
        })
    }
    catch(error){
        console.log("Error message:", error.message)
        return res.json({
            success: false,
            message: "Something went wrong"
        })
    }
}

export {
    contactUsForm
}