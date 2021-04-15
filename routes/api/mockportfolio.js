const router = require("express").Router();
const mockPortfolioController = require("../../controllers/mockPortfolioController");

router.route('/')
    .get(mockPortfolioController.getMockPortfolio)
    .post(mockPortfolioController.createMockPortfolio)
    .put(mockPortfolioController.updateMockPortfolio)
    .delete(mockPortfolioController.deleteMockPortfolio)
;

module.exports = router;
