const express = require("express");
const Router = express.Router();
const Game = require("../../models/game");
Router.get("/:id", async (req, res) => {
  let game = await Game.findById(req.params.id);
  res.send(game);
});
Router.delete("/:id", async (req, res) => {
  let game = await Game.findById(req.params.id);
  await game.delete();
  res.send(game);
});
Router.put("/:id", async (req, res) => {
  let game = await Game.findById(req.params.id);
  game.title = req.body.title;
  game.description = req.body.description;
  game.price = req.body.price;
  await game.save();
  res.send(game);
});
Router.get("/", async (req, res) => {
  let games = await Game.find();
  res.send(games);
});
Router.post("/", async (req, res) => {
  let game = new Game(req.body);
  await game.save();
  res.send(game);
});

module.exports = Router;
