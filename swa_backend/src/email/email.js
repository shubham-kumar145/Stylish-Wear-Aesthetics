const http = require("http");
const nodemailer = require("nodemailer");
const server = http.createServer((req, res) => {
    const auth = nodemailer.createTransport({
        service: "gmail",
        port: 465,
        secure: true,
        auth: {
            user: "smartstocker12342gmail.com",
            pass: "pkds vccw sjtx cgon",
        }
    });


    const receiver = {
        from: "smartstocker1234@gmail.com",
        to: "",
        subject: "Hi",
        text: "Lalala"
    };
    auth.sendMail(receiver, (error, emailResponse) => {
        if (error)
            throw error;
        console.log("success!");
        response.end();
    });
});
server.listen(8080);