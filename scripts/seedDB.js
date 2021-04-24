const mongoose = require("mongoose");
const User = require("../models/user")
const MockPortfolio = require("../models/mockportfolio")
const Portfolio = require("../models/portfolio")
const Syllabus = require("../models/syllabus")
const SyllabusData = require("./syllabusData")

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/cryptouniversity",  {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

const userSeed = {
    username: 'admin'
}

const runSeeder = async () => {
    try {
        // removing all existing data first
        await User.deleteMany({})
        await MockPortfolio.deleteMany({})
        await Portfolio.deleteMany({})
        await Syllabus.deleteMany({})
        // code to seed DB
        await Syllabus.insertMany(SyllabusData)
    } catch(err) {
        throw new err
    }
    process.exit()
}

runSeeder()