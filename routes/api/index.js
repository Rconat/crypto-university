const path = require("path");
const router = require("express").Router();
const pricesRoutes = require("./prices");
const userRoutes = require("./user");
const portfolioRoutes = require("./portfolio");
const mockPortfolioRoutes = require("./mockportfolio");
const syllabusRoutes = require("./syllabus");
const quizRoutes = require("./quiz");

router.use("/prices", pricesRoutes);
router.use("/user", userRoutes);
router.use("/portfolio", portfolioRoutes);
router.use("/mockportfolio", mockPortfolioRoutes);
router.use("/syllabus", syllabusRoutes);
router.use("/quiz", quizRoutes);

module.exports = router;