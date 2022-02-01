const nodemailer = require("nodemailer");
const express = require("express");
const app = express();

app.post("/send-email", (req, res) => {
    let transporter = nodemailer.createTransport({
        host: "host",
        port: 465,
        secure: true,
        auth: {
            user: 'Correo',
            pass: 'Password'
        }
    });

    let mailOptions ={
        from: "Remitente",
        to: "correo",
        subject: "Email con adjuto",
        text: "¡Hola Usuario!",
        attachments: [
            {   // utf-8 string as an attachment || https://nodemailer.com/message/attachments/
                filename: 'text1.txt',
                content: 'aGVsbG8gd29ybGQh',
                encoding: 'base64'
            },
        ]
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error){
            res.status(500).send(error.message);
        }
        else{
            console.log("Email enviado");
            res.status(200).jsonp(req.body);
        }
    });
});

app.listen(3000, () => {
    console.log("Servidor en -> http://localhost:3000");
});