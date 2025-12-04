const mongoose = require('mongoose')

async function main() {
    await mongoose.connect(process.env.mongo_url);
}

module.exports = main