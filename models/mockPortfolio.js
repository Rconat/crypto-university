const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mockPortfolioSchema = new Schema({
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

const MockPortfolio = mongoose.model('MockPortfolio', mockPortfolioSchema)

module.exports = MockPortfolio