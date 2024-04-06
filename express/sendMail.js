const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
    const testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'timmothy.hermiston62@ethereal.email',
            pass: 'GBXuS1E4c88jbQ445r'
        }
    });

    let info = await transporter.sendMail({
        from: '"Varun Patil" <timmothy.hermiston62@ethereal.email>', // sender address
        to: "varunpatil2502@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    })
    
    res.json(info)
}

module.exports = sendMail;