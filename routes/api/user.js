const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/:id")
    .get(userController.getUser)
    .post(userController.createUser)
    .put(userController.updateUser)
    .delete(userController.deleteUser)

module.exports = router;
