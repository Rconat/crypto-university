const mongoose = require("mongoose");
const db = require("../models")

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/cryptouniversity")

const userSeed = {
    username: 'admin'
}

const runSeeder = async () => {
    try {
        // code to seed DB
    } catch(err) {
        throw new err
    }
    process.exit()
}

runSeeder()