import nodemailer from "nodemailer";

async function sendMail(senderName, email, phoneNumber, message){

    try{

        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: 587,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            },
            secure: false
        });

        
    const info = await transporter.sendMail({
        from: `Portfolio Contact <${process.env.EMAIL_USER}>`,
        to: process.env.MAIL_RECEIVER,
        subject: `New message from ${senderName}`,
        html: `
                <h3>Contact Details</h3>
                <p><strong>Name:</strong> ${senderName} </p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>phone Number:</strong> ${phoneNumber}</p>
                <p><strong>Message:</strong>${message}</p>
            `
    })

    console.log("Email sent", info.response);

    }
    catch(error){
        console.error("Error while sending mail: ", error)
        throw error;
    }

}

export {
    sendMail
}