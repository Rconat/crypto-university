const router = require("express").Router();
const syllabusController = require("../../controllers/syllabusController");

// Matches with "/api/syllabus"
router.route("/").get(syllabusController.getAll)

module.exports = router;
