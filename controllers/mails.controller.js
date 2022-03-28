const nodemailer = require("nodemailer");
const { EMAIL_HOST, EMAIL_SECURE, EMAIL_PORT, EMAIL_USED, EMAIL_TO_SEND, EMAIL_PASSWORD } = require("../env");

const transport = nodemailer.createTransport({
  host: EMAIL_HOST,
  secure: EMAIL_SECURE,
  port: EMAIL_PORT,
  auth: {
    user: EMAIL_USED,
    pass: EMAIL_PASSWORD,
  }
})

const send = (req, res) => {
  const emailOption = {
    from: `${EMAIL_USED}`,
    to: [`${req.body.name}`, `${EMAIL_TO_SEND}`],
    subject: `${req.body.objet}`,
    text: `
    Message de ${req.body.name}
    Message : ${req.body.message}
    `
  }

  transport.sendMail(emailOption, (err) => {
    if (err) {
      res.status(500).json({errorMessage: err.message});
    } else {
      res.sendStatus(200);
    }
  })
}

module.exports = send;