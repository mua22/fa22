const express = require("express");
const router = express.Router();
const Car = require("../../models/car");

router.get("/cars/delete/:id", async (req, res) => {
  let car = await Car.findByIdAndDelete(req.params.id);
  res.redirect("/cars");
});
router.get("/cars/edit/:id", async (req, res) => {
  let car = await Car.findById(req.params.id);
  res.render("cars/edit", { car });
});
router.post("/cars/edit/:id", async (req, res) => {
  let car = await Car.findById(req.params.id);
  car.model = req.body.model;
  car.make = req.body.make;
  car.variant = req.body.variant;
  await car.save();
  res.redirect("/cars");
});

router.get("/cars/add", (req, res) => {
  res.render("cars/add");
});
router.post("/cars/add", async (req, res) => {
  let car = new Car(req.body);
  await car.save();
  res.redirect("/cars");
});
router.get("/cars", async (req, res) => {
  const pageTitle = "List of Cars";
  const cars = await Car.find();
  res.render("cars/list", { pageTitle, cars });
});

module.exports = router;
