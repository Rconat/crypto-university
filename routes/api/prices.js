const router = require("express").Router();
const pricesController = require("../../controllers/pricesController");

// Matches with "/api/prices"
router.route("/").get(pricesController.getPrices)

module.exports = router;
