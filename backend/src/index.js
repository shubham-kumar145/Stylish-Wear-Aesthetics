require("dotenv").config();
const express = require("express");
const app = express();

/* ===== REQUIRED FOR SECURE COOKIES ON RENDER ===== */
app.set("trust proxy", 1);

const main = require("./config/db");
const redisClient = require("./config/redis");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/userAuth");
const productRouter = require("./routes/productAuth");
const adminRouter = require("./routes/adminAuth");
const fileUpload = require("express-fileupload");
const cors = require("cors");

/* ================= MIDDLEWARE ================= */
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://swatesting.vercel.app",
    ],
    credentials: true,
  })
);

app.use(
  fileUpload({
    useTempFiles: true,
  })
);

/* ================= ROUTES ================= */
app.use("/user", authRouter);
app.use("/product", productRouter);
app.use("/admin", adminRouter);

/* ================= START SERVER ================= */
const initializeConnection = async () => {
  try {
    await Promise.all([
      main(),
      redisClient.isOpen ? Promise.resolve() : redisClient.connect(),
    ]);

    console.log("DB & Redis Connected");

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server listening at port number: ${PORT}`);
    });
  } catch (err) {
    console.error("Startup Error:", err);
    process.exit(1);
  }
};

initializeConnection();

