const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/")
    .post(userController.createUser)

router.route("/email/:email")
    .get(userController.getUserByEmail)

// /api/user/education/:id
router.route("/education/:id")
    .get(userController.getUserEducationProgressState)

router.route("/:id")
    .get(userController.getUserById)
    .put(userController.updateUser)


module.exports = router;
