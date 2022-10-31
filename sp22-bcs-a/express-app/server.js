const mongoose = require("mongoose");
const express = require("express");
const Game = require("./models/game");
//if you dont have node_modules folder then run below command
// npm install

const app = express();
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");
const gamesApiRouter = require("./routes/api/games");
app.use("/api/games", gamesApiRouter);

app.get("/contact-us", (req, res) => {
  res.render("contact-us");
});
app.get("/", (req, res) => {
  res.render("homepage");
});
mongoose
  .connect("mongodb://localhost/sp20-bcs-a")
  .then(() => {
    console.log("connected to mongodb:localhost//sp20-bcs-a");
  })
  .catch(() => {
    console.log("unable to connect");
  });
app.listen(2000);

//execute this file with following command
// node server

//for auto refresh of the code install nodemon globally
//npm install nodemon -g
// then run the file with nodemon
//nodemon server
