const Syllabus = require("../models/syllabus")
module.exports = {
    getAll: async (req, res) => {
        try {
            const data = await Syllabus.find({})
            return res.json(data[0]);
        } catch (e) {
            return res.json(e)
        }
    },
}