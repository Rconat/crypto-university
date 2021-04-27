const User = require("../models/user")
const Syllabus = require("../models/syllabus")
const ObjectID = require('mongodb').ObjectID;
module.exports = {
    createUser: async (req, res) => {
        try {
            const user = new User(req.body)
            const save = await user.save()
            return res.json(save)
        } catch (error) {
            return res.json(error)
        }
    },
    getUserByEmail: async (req, res) => {
        try {
            const data = await User.findOne({ email: req.params.email })
            return res.json(data)
        } catch (error) {
            return res.json(error)
        }
    },
    getUserById: async (req, res) => {
        try {
            const data = await User.findById(req.params.id)
            return res.json(data)
        } catch (error) {
            return res.json(error)
        }
    },
    updateUser: async (req, res) => {
        try {
            const data = await User.findById(req.params.id);
            const filteredModules = data.modules.filter(item => `${item.syllabus}` !== req.body.syllabus)
            const newData = await User.updateOne({ "_id": ObjectID(req.params.id) }, {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                educated: req.body.educated,
                ...!!req.body.syllabus ? {
                    modules: [
                        {
                            syllabus: req.body.syllabus,
                            completed: req.body.completed,
                            score: req.body.score
                        },
                        ...(filteredModules || [])
                    ]
                } : null
            });
            return res.json(newData)
        } catch (error) {
            return res.json(error)
        }
    },
    getUserEducationProgressState: async (req, res) => {
        try {
            const [fetchUser, fetchSyllabus] = await Promise.all([ User.findById(req.params.id), Syllabus.find({}) ])
            
            const checkValid = (module, currentSyllabus) => module.score === currentSyllabus.questions.length;
        
            const pendingModuleState = fetchSyllabus.map(current => {
                const currentModule = fetchUser.modules.find(item => `${item.syllabus}` === `${current._id}`);
                return !!currentModule ? checkValid(currentModule, current) : false;
            });

            const educateStatus = pendingModuleState.every(item => !!item);
            const newData = await User.updateOne({ "_id": ObjectID(req.params.id) }, { educated: educateStatus });
            return res.json(newData)
        } catch (error) {
            return res.json(error)
        }
    },
}

