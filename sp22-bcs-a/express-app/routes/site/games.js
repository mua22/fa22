const express = require("express");
const Router = express.Router();
const Game = require("../../models/game");
Router.get("/add", async (req, res) => {
  res.render("games/add");
});
Router.post("/add", async (req, res) => {
  let game = new Game(req.body);
  await game.save();
  res.redirect("/games");
});

Router.get("/delete/:id", async (req, res) => {
  let game = await Game.findById(req.params.id);
  await game.delete();
  res.redirect("/games");
});

Router.get("/edit/:id", async (req, res) => {
  let game = await Game.findById(req.params.id);

  res.render("games/edit", { game });
});
Router.post("/edit/:id", async (req, res) => {
  let game = await Game.findById(req.params.id);
  game.title = req.body.title;
  game.description = req.body.description;
  game.price = req.body.price;
  await game.save();
  res.redirect("/games");
});

Router.get("/", async (req, res) => {
  let games = await Game.find();
  res.render("games/list", { games, pageTitle: "Games Page Title" });
});

module.exports = Router;
