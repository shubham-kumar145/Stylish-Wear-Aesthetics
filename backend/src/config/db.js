const mongoose = require('mongoose')

async function main() {
    console.log(process.env.MONGODB_URI);
    await mongoose.connect(process.env.MONGODB_URI);
}


module.exports = main

