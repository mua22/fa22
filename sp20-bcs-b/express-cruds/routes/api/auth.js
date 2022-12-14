const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");
router.post("/", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).send("User Not Exist");
  }
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (validPassword) {
    let token = jwt.sign({ _id: user._id, name: user.name }, "My Private Key");
    return res.send(token);
  } else {
    return res.status(400).send("Invalid Password");
  }
});
module.exports = router;
