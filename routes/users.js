var express = require("express");
var router = express.Router();
let userController = require("../controllers/user");

// Sign-in
router.get("/signin", userController.renderSignin);
router.post("/signin", userController.signin);

// Sign out
router.get("/signout", userController.signout);

module.exports = router;
