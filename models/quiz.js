const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuizSchema = new Schema({
    createdAt: {
        type: Date,
        dafault: Date.now()
    },
    questions: [{
        answer: { type: [String] },
        questionText: { type: String },
        correctAnswer: { type: String }
    }],
    syllabus: {
        type: Schema.Types.ObjectId,
        ref: 'Syllabus'
    }
}, { versionKey: false })

const Quiz = mongoose.model('Quiz', QuizSchema)

module.exports = Quiz;