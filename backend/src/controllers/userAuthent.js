


const redisClient = require("../config/redis");
const User = require("../model/user");
const validate = require("../utils/validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/* COOKIE OPTIONS – RENDER + VERCEL SAFE */
const COOKIE_OPTIONS = {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 60 * 60 * 1000
};

/* ================= REGISTER ================= */
const register = async (req, res) => {
    try {
        validate(req.body);

        req.body.password = await bcrypt.hash(req.body.password, 10);
        req.body.role = "user";

        const user = await User.create(req.body);

        const token = jwt.sign(
            { _id: user._id, emailId: user.emailId, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES }
        );

        res.cookie("token", token, COOKIE_OPTIONS);

        res.status(201).json({
            user: {
                _id: user._id,
                firstName: user.firstName,
                emailId: user.emailId,
                role: user.role
            },
            message: "User created successfully"
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

/* ================= LOGIN ================= */
const login = async (req, res) => {
    try {
        const { emailId, password } = req.body;
        if (!emailId || !password) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const user = await User.findOne({ emailId });
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
            { _id: user._id, emailId: user.emailId, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES }
        );

        res.cookie("token", token, COOKIE_OPTIONS);

        res.status(200).json({
            user: {
                _id: user._id,
                firstName: user.firstName,
                emailId: user.emailId,
                role: user.role
            },
            message: "Logged in successfully"
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

/* ================= LOGOUT ================= */
const logout = async (req, res) => {
    try {
        const token = req.cookies?.token;
        if (!token) {
            return res.status(200).json({ message: "Already logged out" });
        }

        const payload = jwt.verify(token, process.env.JWT_SECRET);

        await redisClient.set(`token:${token}`, "blocked");
        await redisClient.expireAt(`token:${token}`, payload.exp);

        res.clearCookie("token", COOKIE_OPTIONS);
        res.status(200).json({ message: "Logged out successfully" });
    } catch (err) {
        res.status(401).json({ message: "Logout failed" });
    }
};

/* ================= ADMIN REGISTER ================= */
const adminRegister = async (req, res) => {
    try {
        validate(req.body);

        req.body.password = await bcrypt.hash(req.body.password, 10);
        const user = await User.create(req.body);

        res.status(201).json({
            message: "Admin created successfully",
            user: {
                _id: user._id,
                firstName: user.firstName,
                emailId: user.emailId,
                role: user.role
            }
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

/* ================= DELETE PROFILE ================= */
const deleteprofile = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.result._id);
        res.status(200).json({ message: "Deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};

/* ================= GET ALL USERS ================= */
const getAllMember = async (req, res) => {
    try {
        const users = await User.find({})
            .select("_id firstName emailId mobileNo role");
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = {
    register,
    login,
    logout,
    adminRegister,
    deleteprofile,
    getAllMember
};


