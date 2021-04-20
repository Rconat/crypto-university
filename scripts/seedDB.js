const mongoose = require("mongoose");
const User = require("../models/user")
const MockPortfolio = require("../models/mockportfolio")
const Portfolio = require("../models/portfolio")
const Syllabus = require("../models/syllabus")
const Quiz = require("../models/quiz")
const SyllabusData = require("./syllabusData")
const QuizData = require("./quizData")

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
        await Quiz.deleteMany({})
        // code to seed DB
        await Syllabus.insertMany({ syllabus: SyllabusData })
        // insert a collection of documents instead of just { syllabus: SyllabusData }
        // have no clue right now
        // one way of it looking at it: ([{},{},{}] instead of {[{},{},{}]} (check out 3001/api/syllabus for reference))
    } catch(err) {
        throw err
    }
    process.exit()
}

runSeeder()