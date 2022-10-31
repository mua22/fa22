const mongoose = require("mongoose");
const gameSchema = mongoose.Schema({
  title: String,
  description: String,
  price: Number,
});
const Game = mongoose.model("Game", gameSchema);
module.exports = Game;
