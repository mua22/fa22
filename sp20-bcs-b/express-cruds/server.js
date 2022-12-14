const express = require("express");
const mongoose = require("mongoose");

var session = require("express-session");
var cookieParser = require("cookie-parser");
var expressLayouts = require("express-ejs-layouts");
var customLogger = require("./middlewares/logger");
var checkSessionAuth = require("./middlewares/checkSessionAuth");
var sitemiddleware = require("./middlewares/sitemiddleware");
const app = express();
app.use(cookieParser());
app.use(
  session({
    secret: "My Session Secret",
    cookie: { maxAge: 60000 },
    resave: true,
    saveUninitialized: true,
  })
);
app.use(customLogger);
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(expressLayouts);
//add a router to our app
app.use("/", sitemiddleware, require("./routes/site/auth"));
app.use(
  "/cars",
  sitemiddleware,
  checkSessionAuth,
  require("./routes/site/cars")
);

app.use("/", require("./routes/api/cars"));
app.get("/", sitemiddleware, (req, res) => {
  res.render("homepage");
});

app.listen(2000, () => {
  console.log("Server Listening on localhost:2000");
});
mongoose
  .connect("mongodb://localhost/sp20-bcs-b")
  .then(() => {
    console.log("Mongo DB connected");
  })
  .catch((err) => {
    console.log("Unable to connect");
  });
