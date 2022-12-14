const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
router.get("/login", async (req, res) => {
  return res.render("auth/login");
});
router.get("/logout", async (req, res) => {
  req.session.user = null;
  return res.redirect("/login");
});
router.post("/login", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (!user) {
    // req.flash("danger", "User with this email not present");
    return res.redirect("/login");
  }
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (validPassword) {
    req.session.user = user;
    // req.flash("success", "Logged in Successfully");
    return res.redirect("/");
  } else {
    // req.flash("danger", "Invalid Password");
    return res.redirect("/login");
  }
});
router.get("/register", async (req, res) => {
  return res.render("auth/register");
});
router.post("/register", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.redirect("/register");
  }
  user = new User(req.body);
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(req.body.password, salt);

  await user.save();
  return res.redirect("/login");
});

module.exports = router;
