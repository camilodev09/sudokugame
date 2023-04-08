require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "../public")));
app.use("/assets", express.static(path.join(__dirname, "../src/assets")));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3001;

app.post("/contact", (req, res) => {
  const { email, message, name, phone } = req.body;
  console.log("Received email:", email);
  console.log("Received message:", message);

  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true, // Si el modo de seguridad es SSL
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: "New message from your website",
    html: `<p>From: ${email}</p> <p>Name: ${name}</p> <p>Phone: ${phone}</p> <p>Message: ${message}</p>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Something went wrong.");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully.");
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
