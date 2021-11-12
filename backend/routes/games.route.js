const router = require("express").Router();
const Game = require("../models/games.model");

//list of all games
router.get("/", (req, res) => {
    Game.find()
       .then((listofGamesFromDb) => {
           res.json({games: listofGamesFromDb})
       }).catch((err) => res.json({ errorMessage: err }))
});

router.post("/", (req, res) => {
    Game.create(req.body)
       .then((newGame) => {
           res.json({game: newGame})
       }).catch((err) => res.json({ errorMessage: err }))
});

module.exports = router;