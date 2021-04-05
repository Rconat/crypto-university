const router = require('express').Router()
const mockPortfolioController = require('../controllers/mockPortfolioController')
const portfolioController = require('../controllers/portfolioController')
const userController = require('../controllers/userController')

router.route('/api/mockportfolio')
    .get(mockPortfolioController.getMockPortfolio)
    .post(mockPortfolioController.createMockPortfolio)
    .put(mockPortfolioController.updateMockPortfolio)
    .delete(mockPortfolioController.deleteMockPortfolio)
;

router.route('/api/portfolio')
    .get(portfolioController.getPortfolio)
    .post(portfolioController.createPortfolio)
    .put(portfolioController.updatePortfolio)
    .delete(portfolioController.deletePortfolio)
;

router.route('/api/users/:id')
    .get(userController.getUser)
    .post(userController.createUser)
    .put(userController.updateUser)
    .delete(userController.deleteUser)
;