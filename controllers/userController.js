const User = require("../models/user")
const ObjectID = require('mongodb').ObjectID;
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
            const data = await User.findById(req.params.id);
            const newData = await User.updateOne({ "_id": ObjectID(req.params.id)}, {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                educated: req.body.educated,
                ...!!req.body.syllabus ? {
                    modules: [
                        ...(data.modules || []),
                        {
                            syllabus: req.body.syllabus,
                            completed: req.body.completed,
                            score: req.body.score
                        }
                    ]
                } : null
            });
            return res.json(newData)
        } catch(error) {
            return res.json(error)
        }
    },
}