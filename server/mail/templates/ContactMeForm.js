
const contactMeForm = (
    senderName,
    senderEmail,
    senderPhoneNumber,
    senderMessage
) => {
    return `<!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8">
                <title>Contact Form Information</title>
                <style>
                    body {
                        background-color: "#ffffff";
                        font-family: Arial, sans-serif;
                        font-size: 15px;
                        line-height: 1.4;
                        color: "#333333";
                        margin:0;
                        padding:0;
                    }

                    .container{
                        max-width: 600px;
                        margin: 0 auto;
                        padding: 20px;
                        text-align: center
                    }

                    .message{
                        font-size: 18px;
                        font-weight: bold;
                        margin-bottom: 20px;
                    }

                    .body{
                        font-size: 16px;
                        margin-bottom: 20px;
                    }

                </style>
            </head>

            <body>
                <div class="container">
                    <a href="http//:localhost:5001">
                        <img src="../../../src/assets/logo.png"/>
                    </a>
                    <div class="message">Contact Form Information</div>
                    <div class="body">
                        <p>Name:- ${senderName},</p>
                        <p>Email:- ${senderEmail}</p>
                        <p>Mob. No.:- ${senderPhoneNumber} </p> <br/><br/>
                        <p>Sir,</p>
                        <p>${senderMessage}</p>
                    </div>
                </div>
            </body>
        </html>    `
}

export {
    contactMeForm
}