const router = require("express").Router();
const quizController = require("../../controllers/quizController");

// Matches with "/api/quiz/:syllbusId"
router.route("/:id").get(quizController.getQuizId)

module.exports = router;
