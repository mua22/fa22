const express = require("express");
const router = express.Router();
const Car = require("../../models/car");

//router to delete single car
router.delete("/api/cars/:id", async (req, res) => {
  let car = await Car.findById(req.params.id);
  await car.delete();
  res.send(car);
});

//router to update single car
router.put("/api/cars/:id", async (req, res) => {
  let car = await Car.findById(req.params.id);
  car.make = req.body.make;
  car.model = req.body.model;
  car.variant = req.body.variant;
  await car.save();
  res.send(car);
});

//router to get single car
router.get("/api/cars/:id", async (req, res) => {
  let car = await Car.findById(req.params.id);
  res.send(car);
});

//router to create new car
router.post("/api/cars", async (req, res) => {
  let car = new Car(req.body);
  await car.save();
  res.send(car);
});

//router to get all cars
router.get("/api/cars", async (req, res) => {
  let cars = await Car.find();
  res.send(cars);
});

module.exports = router;
