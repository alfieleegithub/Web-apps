const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const path = require("path");
const config = require("./config")

const app = express();
const HTTP_PORT = process.env.PORT || 8080

const transporter = nodemailer.createTransport({
    service: "Outlook",
    auth: {
        user: config.user,
        pass: config.pass
    }
})

transporter.verify((error) => {
    if (error) {
        console.log("Transporter issue");
    } else {
        console.log("Transporter is ready");
    }
})

app.use(bodyParser.json());

app.use(express.static("public"));

app.post("/send", (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let message = req.body.message;

    let newContact = {
        from: config.user,
        to: config.destination,
        subject: "New email from my contact page",
        text: `\n Name: ${name} \n Email: ${email} \n Message: ${message}`
    }

    let autoReply = {
        from: config.user,
        to: email,
        subject: "Confirmation email",
        text: `Hi ${name}, \n\n Thank you for contacting me, I will reply to you as soon as possible. \n\n Sincerely, \n ${config.fullname}`
    }

    transporter.sendMail(newContact, (error) => {
        if (error) {
            res.json({
                status: "failed"
            })
        } else {
            transporter.sendMail(autoReply);
            res.json({
                status: "successful"
            }) 
        }
    })
})

app.use((req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.listen(HTTP_PORT, ()=>{
    console.log("listening on port: " + HTTP_PORT);
});