import nodemailer from "nodemailer";

async function mailSender(htmlContent) {
    try{
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth:{
                user: process.env.MAIL_USER,
                pass:process.env.MAIL_PASS
            },
            secure: false
        })

        let info = await transporter.sendMail({
            from: `${process.env.MAIL_USER}`,
            to: process.env.EMAIL,
            html: htmlContent
        })
        return info
    }catch(e){
        console.log(e.message)
        return e.message
        }
}
export{
    mailSender
}