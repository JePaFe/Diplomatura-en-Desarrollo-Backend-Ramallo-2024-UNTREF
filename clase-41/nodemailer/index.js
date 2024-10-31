require("dotenv").config();
const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const emailOptions = {
  from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
  to: "bar@example.com, baz@example.com", // list of receivers
  subject: "Hello ✔", // Subject line
  text: "Hello world?", // plain text body
  html: "<b>Hello world?</b>", // html body
};

transport.sendMail(emailOptions, (err, data) => {
  console.log(data);
  if (err) {
    console.error("Ha ocurrido un error: ⛔️", err);
  } else {
    console.log("Se ha enviado el Email. 📧");
  }
});
