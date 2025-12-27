// // const redisClient = require("../config/redis")
// // const User = require("../model/user")
// // const validate = require("../utlis/valitator")
// // const bcrypt = require("bcrypt")
// // const jwt = require("jsonwebtoken")

// // const register = async (req, res) => {
// //     try {
// //         validate(req.body)
// //         const { firstName, emailId, password, mobileNo } = req.body;
// //         req.body.password = await bcrypt.hash(password, 10)
// //         req.body.role = 'user'

// //         const user = await User.create(req.body)

// //         const reply = {
// //             firstName: user.firstName,
// //             emailId: user.emailId,
// //             _id: user._id,
// //             role: user.role,
// //         }

// //         const token = jwt.sign({ _id: user._id, emailId: emailId, role: "user" }, "wsac", { expiresIn: 60 * 60 })
// //         res.cookie('token', token, { maxAge: 60 * 60 * 1000 })


// //         res.status(201).json({
// //             user: reply,
// //             message: 'user created successfully'
// //         })


// //     } catch (err) {
// //         res.status(400).send('ERROR: ' + err)
// //     }
// // }

// // const login = async (req, res) => {
// //     try {
// //         const { emailId, password } = req.body
// //         if (!emailId) {
// //             throw new Error("Invalid Credentials")
// //         }
// //         if (!password) {
// //             throw new Error("Invalid Credentials")
// //         }
// //         const user = await User.findOne({ emailId })

// //         if (!user) {
// //             return res.status(401).send('Invalid Credentials');
// //         }

// //         const match = await bcrypt.compare(password, user.password)

// //         if (!match) {
// //             throw new Error('Invalid Credentials')
// //         }

// //         const reply = {
// //             firstName: user.firstName,
// //             emailId: user.emailId,
// //             _id: user._id,
// //             role: user.role
// //         }

// //         const token = jwt.sign({ _id: user._id, emailId: emailId, role: user.role }, "wsac", { expiresIn: 60 * 60 })
// //         res.cookie('token', token, { maxAge: 60 * 60 * 1000 })

// //         res.status(201).json({
// //             user: reply,
// //             message: "Logged In Successfully"
// //         })
// //     } catch (err) {
// //         res.status(401).send('ERROR: ' + err)
// //     }
// // }

// // const logout = async (req, res) => {
// //     try {
// //         const { token } = req.cookies
// //         const payload = jwt.decode(token);
// //         await redisClient.set(`token:${token}`, "Blocked")
// //         await redisClient.expireAt(`token:${token}`, payload.exp)
// //         res.cookie("token", null, { expires: new Date(Date.now()) })
// //         res.status(200).send("Logged Out Succesfully")
// //     } catch (err) {
// //         res.status(503).send("ERROR: " + err)
// //     }
// // }

// // const adminRegister = async (req, res) => {
// //     try {
// //         validate(req.body)
// //         const { firstName, emailId, password, mobileNo, role } = req.body;
// //         req.body.password = await bcrypt.hash(password, 10)
// //         const user = await User.create(req.body)
// //         const reply = {
// //             firstName: user.firstName,
// //             emailId: user.emailId,
// //             _id: user._id,
// //             role: user.role,
// //         }
// //         const token = jwt.sign({ _id: user._id, emailId: emailId, role: role }, "wsac", { expiresIn: 60 * 60 })
// //         res.cookie('token', token, { maxAge: 60 * 60 * 1000 })
        
// //         res.status(201).json({
// //             user: reply,
// //             message: 'user created successfully'
// //         })
// //     } catch (err) {
// //         res.status(400).send('ERROR: ' + err)
// //     }
// // }

// // const deleteprofile = async (req, res) => {
// //     try {
// //         const userId = req.result._id;
// //         await User.findByIdAndDelete(userId)
// //         res.status(200).send("Deleted Successfully")
// //     } catch (err) {

// //         res.status(500).send("SERVER ERROR")
// //     }
// // }

// // const getAllMember = async (req, res) => {
// //     console.log("admin is here");

// //     try {
// //         const getuser = await User.find({}).select('_id firstName emailId mobileNo role purchage cart')
// //         res.status(200).send(getuser);
// //     } catch (err) {

// //         res.status(500).send("SERVER ERROR")
// //     }
// // }

// // module.exports = { register, login, logout, adminRegister, deleteprofile, getAllMember }
// const redisClient = require("../config/redis")
// const User = require("../model/user")
// const validate = require("../utlis/valitator")
// // const bcrypt = require("bcrypt")
// const bcrypt = require("bcryptjs");

// const jwt = require("jsonwebtoken")

// const register = async (req, res) => {
//     try {
//         validate(req.body)
//         const { firstName, emailId, password, mobileNo } = req.body;
//         req.body.password = await bcrypt.hash(password, 10)
//         req.body.role = 'user'

//         const user = await User.create(req.body)

//         const reply = {
//             firstName: user.firstName,
//             emailId: user.emailId,
//             _id: user._id,
//             role: user.role,
//         }

//         const token = jwt.sign({ _id: user._id, emailId: emailId, role: "user" }, "wsac", { expiresIn: 60 * 60 })
//         res.cookie('token', token, { maxAge: 60 * 60 * 1000 })


//         res.status(201).json({
//             user: reply,
//             message: 'user created successfully'
//         })


//     } catch (err) {
//         res.status(400).send('ERROR: ' + err)
//     }
// }

// const login = async (req, res) => {
//     try {
//         const { emailId, password } = req.body
//         if (!emailId) {
//             throw new Error("Invalid Credentials")
//         }
//         if (!password) {
//             throw new Error("Invalid Credentials")
//         }
//         const user = await User.findOne({ emailId })

//         if (!user) {
//             return res.status(401).send('Invalid Credentials');
//         }

//         const match = await bcrypt.compare(password, user.password)

//         if (!match) {
//             throw new Error('Invalid Credentials')
//         }

//         const reply = {
//             firstName: user.firstName,
//             emailId: user.emailId,
//             _id: user._id,
//             role: user.role
//         }

//         const token = jwt.sign({ _id: user._id, emailId: emailId, role: user.role }, "wsac", { expiresIn: 60 * 60 })
//         res.cookie('token', token, { maxAge: 60 * 60 * 1000 })

//         res.status(201).json({
//             user: reply,
//             message: "Logged In Successfully"
//         })
//     } catch (err) {
//         res.status(401).send('ERROR: ' + err)
//     }
// }

// const logout = async (req, res) => {
//     try {
//         const { token } = req.cookies
//         const payload = jwt.decode(token);
//         await redisClient.set(`token:${token}`, "Blocked")
//         await redisClient.expireAt(`token:${token}`, payload.exp)
//         res.cookie("token", null, { expires: new Date(Date.now()) })
//         res.status(200).send("Logged Out Succesfully")
//     } catch (err) {
//         res.status(503).send("ERROR: " + err)
//     }
// }

// const adminRegister = async (req, res) => {
//     try {
//         validate(req.body)
//         const { firstName, emailId, password, mobileNo, role } = req.body;
//         req.body.password = await bcrypt.hash(password, 10)
//         const user = await User.create(req.body)
//         const reply = {
//             firstName: user.firstName,
//             emailId: user.emailId,
//             _id: user._id,
//             role: user.role,
//         }
//         const token = jwt.sign({ _id: user._id, emailId: emailId, role: role }, "wsac", { expiresIn: 60 * 60 })
//         res.cookie('token', token, { maxAge: 60 * 60 * 1000 })
        
//         res.status(201).json({
//             user: reply,
//             message: 'user created successfully'
//         })
//     } catch (err) {
//         res.status(400).send('ERROR: ' + err)
//     }
// }

// const deleteprofile = async (req, res) => {
//     try {
//         const userId = req.result._id;
//         await User.findByIdAndDelete(userId)
//         res.status(200).send("Deleted Successfully")
//     } catch (err) {

//         res.status(500).send("SERVER ERROR")
//     }
// }

// const getAllMember = async (req, res) => {
//     console.log("admin is here");

//     try {
//         const getuser = await User.find({}).select('_id firstName emailId mobileNo role purchage cart')
//         res.status(200).send(getuser);
//     } catch (err) {

//         res.status(500).send("SERVER ERROR")
//     }
// }


// module.exports = { register, login, logout, adminRegister, deleteprofile, getAllMember }

const redisClient = require("../config/redis");
const User = require("../model/user");
const validate = require("../utils/validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const COOKIE_OPTIONS = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 1000
};

/* ================= REGISTER ================= */
const register = async (req, res) => {
    try {
        validate(req.body);

        const { password } = req.body;
        req.body.password = await bcrypt.hash(password, 10);
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
        res.status(400).json({ message: "Registration failed" });
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
        res.status(500).json({ message: "Login failed" });
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
// ⚠️ MUST be protected by admin middleware
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
        res.status(400).json({ message: "Admin creation failed" });
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
