import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

async function sendMail(senderName, email, phoneNumber, message){

    try{

        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: 587,
            secure: false,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        });

        await transporter.sendMail({
            from: `Portfolio Contact <${process.env.MAIL_USER}>`,
            to: process.env.MAIL_RECEIVER,
            subject: `New message from ${senderName}`,
            html: 
                `<h3>Contact Details</h3>
                <p><strong>Name:</strong> ${senderName} </p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>phone Number:</strong> ${phoneNumber}</p>
                <p><strong>Message:</strong>${message}</p>`
        });

    }
    catch(error){
        console.error("Error while sending mail: ", error)
        throw error;
    }

}

export {
    sendMail
}