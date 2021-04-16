const router = require("express").Router();
const portfolioController = require("../../controllers/portfolioController");

router.route('/')
    .get(portfolioController.getPortfolio)
    .post(portfolioController.createPortfolio)
    .put(portfolioController.updatePortfolio)
    .delete(portfolioController.deletePortfolio)
;

module.exports = router;
