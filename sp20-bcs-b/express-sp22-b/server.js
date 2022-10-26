//first we require express
const express = require("express");

// run below command to recreate node_modules
//npm install
//npm i nodemon -g
// above command will install nodemon globally
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.get("/api/products", function (request, respnse) {
  respnse.send(["Pen", "Pencil"]);
});
app.get("/", function (req, res) {
  res.render("homepage");
  //   res.send("<h1>Hello B Section with nodemon</h1>");
});
app.listen(2000, function () {
  console.log("Listening on 2000");
});
