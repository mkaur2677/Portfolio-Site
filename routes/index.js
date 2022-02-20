var express = require("express");
var router = express.Router();
let indexController = require("../controllers/index");

/* GET home page. */
router.get("/", indexController.home);

/* GET About page. */
router.get("/about", function (req, res, next) {
  res.render("about", { title: "About" });
});

/* GET services page. */
router.get("/services", function (req, res, next) {
  res.render("services", { title: "Services" });
});

/* GET contact page. */
router.get("/contact", function (req, res, next) {
  res.render("contact", { title: "Contact Me" });
});

/* GET project page. */
router.get("/project", function (req, res, next) {
  res.render("project", { title: "Projects" });
});

module.exports = router;
