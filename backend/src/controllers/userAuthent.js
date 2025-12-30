
const redisClient = require("../config/redis");
const User = require("../model/user");
const validate = require("../utlis/valitator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/* ================= COOKIE CONFIG ================= */
const cookieOptions = {
  httpOnly: true,
  secure: true,        // REQUIRED on Render
  sameSite: "None",    // REQUIRED for cross-origin
  maxAge: 60 * 60 * 1000,
};

/* ================= REGISTER ================= */
const register = async (req, res) => {
  try {
    validate(req.body);

    const { password } = req.body;
    req.body.password = await bcrypt.hash(password, 10);
    req.body.role = "user";

    const user = await User.create(req.body);

    const reply = {
      firstName: user.firstName,
      emailId: user.emailId,
      _id: user._id,
      role: user.role,
    };

    const token = jwt.sign(
      { _id: user._id, emailId: user.emailId, role: "user" },
      process.env.JWT_SECRET || "wsac",
      { expiresIn: "1h" }
    );

    res.cookie("token", token, cookieOptions);

    res.status(201).json({
      user: reply,
      message: "User created successfully",
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/* ================= LOGIN ================= */
const login = async (req, res) => {
  try {
    const { emailId, password } = req.body;

    if (!emailId || !password) {
      return res.status(401).json({ error: "Invalid Credentials" });
    }

    const user = await User.findOne({ emailId });
    if (!user) {
      return res.status(401).json({ error: "Invalid Credentials" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ error: "Invalid Credentials" });
    }

    const reply = {
      firstName: user.firstName,
      emailId: user.emailId,
      _id: user._id,
      role: user.role,
    };

    const token = jwt.sign(
      { _id: user._id, emailId: user.emailId, role: user.role },
      process.env.JWT_SECRET || "wsac",
      { expiresIn: "1h" }
    );

    res.cookie("token", token, cookieOptions);

    res.status(200).json({
      user: reply,
      message: "Logged in successfully",
    });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

/* ================= LOGOUT ================= */
const logout = async (req, res) => {
  try {
    const token = req.cookies?.token;
    if (!token) return res.status(200).send("Already logged out");

    const payload = jwt.decode(token);
    if (payload) {
      await redisClient.set(`token:${token}`, "Blocked");
      await redisClient.expireAt(`token:${token}`, payload.exp);
    }

    res.clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    });

    res.status(200).send("Logged out successfully");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* ================= ADMIN REGISTER ================= */
const adminRegister = async (req, res) => {
  try {
    validate(req.body);

    const { password } = req.body;
    req.body.password = await bcrypt.hash(password, 10);

    const user = await User.create(req.body);

    const reply = {
      firstName: user.firstName,
      emailId: user.emailId,
      _id: user._id,
      role: user.role,
    };

    const token = jwt.sign(
      { _id: user._id, emailId: user.emailId, role: user.role },
      process.env.JWT_SECRET || "wsac",
      { expiresIn: "1h" }
    );

    res.cookie("token", token, cookieOptions);

    res.status(201).json({
      user: reply,
      message: "Admin created successfully",
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/* ================= DELETE PROFILE ================= */
const deleteprofile = async (req, res) => {
  try {
    const userId = req.result._id;
    await User.findByIdAndDelete(userId);
    res.status(200).send("Deleted Successfully");
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

/* ================= GET ALL USERS ================= */
const getAllMember = async (req, res) => {
  try {
    const users = await User.find({})
      .select("_id firstName emailId mobileNo role purchage cart");

    res.status(200).json(users);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

module.exports = {
  register,
  login,
  logout,
  adminRegister,
  deleteprofile,
  getAllMember,
};
