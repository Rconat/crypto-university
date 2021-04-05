const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: "A username is required"
    },
    mockPortfolio : [
        {
            type: Schema.Types.ObjectId,
            ref: 'mockPortfolio'
        }
    ],
    portfolio : [
        {
            type: Schema.Types.ObjectId,
            ref: 'portfolio'
        }
    ],
    educated: {
        type: Boolean,
        default: false
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User