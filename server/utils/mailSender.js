import nodemailer from "nodemailer";

async function sendMail(name, email, message){

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
        subject: `New message from ${name}`,
        text: `
                <h3>Contact Details</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
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