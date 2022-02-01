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
        subject: "Email de texto plano",
        text: "¡Hola Usuario!",
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