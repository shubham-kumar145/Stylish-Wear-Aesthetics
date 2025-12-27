const express = require('express');
const {
    register,
    login,
    logout,
    adminRegister,
    deleteprofile,
    getAllMember
} = require('../controllers/userAuthent');

const userMiddleware = require('../middleware/userMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');
const getGeminiResponse = require('../aichat/chat');

const authRouter = express.Router();

// ---------------- AUTH ROUTES ----------------
authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout', userMiddleware, logout);

authRouter.get('/get-all-member', adminMiddleware, getAllMember);
authRouter.post('/admin/register', adminMiddleware, adminRegister);

authRouter.delete('/deleteprofile', userMiddleware, deleteprofile);

// Validate user token
authRouter.get('/check', userMiddleware, (req, res) => {
    const reply = {
        firstName: req.result.firstName,
        emailId: req.result.emailId,
        _id: req.result._id,
        role: req.result.role
    };

    return res.status(200).json({
        user: reply,
        message: "Valid User"
    });
});

// ---------------- AI CHAT ROUTE ----------------
authRouter.post('/api/chat', userMiddleware, async (req, res) => {
    try {
        const { message } = req.body;

        console.log("User asked:", message);

        if (!message || typeof message !== "string") {
            return res.status(400).json({ error: "Message is required." });
        }

        const reply = await getGeminiResponse(message);

        return res.json({
            success: true,
            reply: reply || "No response received.",
        });

    } catch (err) {
        console.error("❌ Server Error:", err);

        return res.status(500).json({
            success: false,
            error: "AI server error. Please try again.",
        });
    }
});

module.exports = authRouter;
