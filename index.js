var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    secureConnection: false,
    port: 465,
    secure:true,
    auth: {
        user: 'wiliwork1103@gmail.com',
        pass: 'love20000319'
    }
});

var mailOptions = {
    from: 'wiliwork1103@gmail.com',
    to: 'wiliwork1103@gmail.com',
    subject: 'Sending Email using Nodemailer',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error)
        return console.log(error);

    console.log('Email sent: ' + info.response);
});