import nodemailer from "nodemailer";

async function sendMail(to, subject, text){

    try{

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        
    const info = await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to,
        subject,
        text
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