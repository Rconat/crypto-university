const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PortfolioSchema = new Schema({
    title: {
        type: String,
        required: 'A portfolio title is required'
    },
    createdAt: {
        type: Date,
        dafault: Date.now()
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Portfolio = mongoose.model('Portfolio', PortfolioSchema)

module.exports = Portfolio