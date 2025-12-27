// require('dotenv').config();
// const express = require('express');
// const app = express();
// const main = require("./config/db");
// const redisClient = require('./config/redis')
// const cookieParser = require('cookie-parser')
// const authRouter = require('./routes/userAuth');
// const productRouter = require('./routes/productAuth');
// const adminRoutor = require('./routes/adminAuth');
// const fileUpload = require("express-fileupload")
// const cors = require('cors');
// app.use(express.json());
// app.use(cookieParser())
// app.use(cors({
//     origin: 'https://stylish-wear-aesthetics.vercel.app/', 
//     credentials: true               
// }));
// app.use(fileUpload({
//     useTempFiles: true
// }))
// app.use('/user', authRouter)
// app.use('/product', productRouter)
// app.use('/admin', adminRoutor)
// const InitalizeConnection = async () => {
//     try {

//         await Promise.all([main(), redisClient.connect()]);
//         console.log("DB Connected");

//         app.listen(5000, () => {
//             console.log("Server listening at port number: 5000");
//         })

//     }
//     catch (err) {
//         console.log("Error: " + err);
//     }
// }


// InitalizeConnection();


require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");

const main = require("./config/db");
const redisClient = require("./config/redis");

const authRouter = require("./routes/userAuth");
const productRouter = require("./routes/productAuth");
const adminRouter = require("./routes/adminAuth");

const app = express();

/* ================= MIDDLEWARE ================= */
app.use(express.json());
app.use(cookieParser());

// app.use(cors({
//     origin: "https://stylish-wear-aesthetics.vercel.app",
//     credentials: true
// }));
app.use(cors({
    origin: "https://stylish-wear-aesthetics.vercel.app",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.options("*", cors());


app.use(fileUpload({
    useTempFiles: true
}));

/* ================= ROUTES ================= */
app.use("/user", authRouter);
app.use("/product", productRouter);
app.use("/admin", adminRouter);

/* ================= SERVER START ================= */
const PORT = process.env.PORT || 5000;

const initializeConnection = async () => {
    try {
        await Promise.all([main(), redisClient.connect()]);
        console.log("DB Connected");

        app.listen(PORT, () => {
            console.log(`Server listening at port number: ${PORT}`);
        });

    } catch (err) {
        console.error("Server error:", err);
    }
};

initializeConnection();

