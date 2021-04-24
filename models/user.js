const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: "A username is required"
    },
    modules: [
        {
            score: { type: Number, default: 0 },
            completed: { type: Boolean, default: false },
            syllabus: {
                type: Schema.Types.ObjectId,
                ref: 'Syllabus'
            },
        }
    ],
    educated: {
        type: Boolean,
        default: false
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User


// mockPortfolio : [
//     {
//         type: Schema.Types.ObjectId,
//         ref: 'mockPortfolio'
//     }
// ],
// portfolio : [
//     {
//         type: Schema.Types.ObjectId,
//         ref: 'portfolio'
//     }
// ],