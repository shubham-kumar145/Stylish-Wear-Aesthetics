const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20,
    },
    lastName: {
        type: String,
        minlength: 3,
        maxlength: 20,
    }, emailId: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        immutable: true,
    },
    mobileNo: {
        type: Number,
        required: true,
        unique: true,
        trim: true,
        immutable: true,
    },
    age: {
        type: Number,
        min: 6,
        max: 100,
    },
    role: {
        type: String,
        enum: ['user', 'staff', 'admin'],
        default: 'user',
    },
    password: {
        type: String,
        required: true,
    },
    purchage: {
        type: [{
            type: String,
        }]
    },
    cart: [{
        productId: {
            type: Schema.Types.ObjectId,
            ref: "product",
        },
        quantity: {
            type: Number,
            default: 1,
            min: 1
        }
    }]
}, {
    timestamps: true
})
const User = mongoose.model("user", userSchema);
module.exports = User;
