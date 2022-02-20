let passport = require("passport");

module.exports.renderSignin = function (req, res, next) {
  if (!req.user) {
    res.render("auth/signin", {
      title: "Sign-in Form",
      messages: req.flash("error") || req.flash("info"),
    });
  } else {
    console.log(req.user);
    return res.redirect("/");
  }
};

module.exports.signin = function (req, res, next) {
  passport.authenticate("local", {
    successRedirect: req.session.url || "/secure/contactlist",
    failureRedirect: "/users/signin",
    failureFlash: true,
  })(req, res, next);
  delete req.session.url;
};

module.exports.signout = function (req, res, next) {
  req.logout();
  res.redirect("/");
};