const mongoose = require('mongoose')

async function main() {
    await mongoose.connect(process.env.MONGODB_URI);
}

module.exports = main