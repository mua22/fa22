const express = require("express");
const Router = express.Router();
const Car = require("../../models/car");
Router.get("/cars", async (req, res) => {
  const pageTitle = "List of Cars";
  const cars = await Car.find();
  res.render("cars/list", { pageTitle, cars });
});

module.exports = Router;
