const router = require("express").Router();
const syllabusController = require("../../controllers/syllabusController");

// Matches with "/api/syllabus"
router.route("/").get(syllabusController.getAll)
// Matches with "/api/syllabus/:id"
router.route("/:id").get(syllabusController.getQuizById)

module.exports = router;
