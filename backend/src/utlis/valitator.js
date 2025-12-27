const validator = require('validator');

const validate = (data) => {
    const mandatoryFields = ['firstName', 'emailId', 'password', 'mobileNo'];

    const isAllowed = mandatoryFields.every((key) => Object.keys(data).includes(key));
    if (!isAllowed) {
        throw new Error("Some required fields are missing");
    }

    if (!validator.isEmail(data.emailId)) {
        throw new Error("Invalid email");
    }

    if (!validator.isStrongPassword(data.password)) {
        throw new Error("Week password")
    }

    const mobileStr = String(data.mobileNo);
    if (!/^\d{10}$/.test(mobileStr)) {
        throw new Error("Invalid mobile number");
    }
};

module.exports = validate;
