const User = require("../models/user")
module.exports = {
    createUser: async(req, res) => {
        try {
            const user = new User(req.body)
            const save = await user.save()
            return res.json(save)
        } catch(error) {
            return res.json(error)
        }
    },
    getUserByEmail: async(req, res) => {
        try {
            const data = await User.findOne({ email: req.params.email })
            return res.json(data)
        } catch(error) {
            return res.json(error)
        }
    },
    getUserById: async(req, res) => {
        try {
            const data = await User.findById(req.params.id)
            return res.json(data)
        } catch(error) {
            return res.json(error)
        }
    },
    updateUser: async(req, res) => {
        try {
            const data = await User.findByIdAndUpdate(req.params.id, {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
            });
            return res.json(data)
        } catch(error) {
            return res.json(error)
        }
    },
}