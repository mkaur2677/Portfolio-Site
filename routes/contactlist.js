var express = require("express");
var router = express.Router();
let contactlistController = require("../controllers/contactlist");

function requireAuth(req, res, next) {
  // check if the user is logged in
  if (!req.isAuthenticated()) {
    req.session.url = req.originalUrl;
    return res.redirect("/users/signin");
  }
  next();
}

// contact view
router.get("/contactlist", requireAuth, contactlistController.contactList);
module.exports = router;

// for edit
router.get("/edit/:id", requireAuth, contactlistController.displayEditPage);
router.post("/edit/:id", requireAuth, contactlistController.processEditPage);

// for delete
router.get("/delete/:id", requireAuth, contactlistController.performDelete);
