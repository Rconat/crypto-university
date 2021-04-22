const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SyllabusSchema = new Schema({
    createdAt: {
        type: Date,
        dafault: Date.now()
    },
    color: { type: String },
    title: { type: String },
}, { versionKey: false })

const Syllabus = mongoose.model('Syllabus', SyllabusSchema)

module.exports = Syllabus;

// might have to tweak this model 