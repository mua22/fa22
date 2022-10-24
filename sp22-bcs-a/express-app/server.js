const express = require("express");
//if you dont have node_modules folder then run below command
// npm install

const app = express();
app.use(express.static("public"));
app.get("/contact-us.html", (req, res) => {
  res.send("<h2>Contact Us</h2>");
});
app.get("/", (req, res) => {
  res.send("<h1>Hello A Section with nodemon </h1>");
});
app.listen(2000);

//execute this file with following command
// node server

//for auto refresh of the code install nodemon globally
//npm install nodemon -g
// then run the file with nodemon
//nodemon server
