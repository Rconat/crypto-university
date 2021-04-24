const Syllabus = require("../models/syllabus")
module.exports = {
    getAll: async (req, res) => {
        try {
            const data = await Syllabus.find({})
            return res.json(data);
        } catch (e) {
            return res.json(e)
        }
    },
    getQuizById: async (req, res) => {
        try {
            const data = await Syllabus.findById(req.params.id)
            return res.json(data);
        } catch (e) {
            return res.json(e)
        }
    },
}