const mongoose = require("mongoose");

const carSchema = mongoose.Schema({
  make: String,
  model: String,
  variant: String,
});

const Car = mongoose.model("Car", carSchema);
module.exports = Car;
