const router = require("express").Router();
const axios = require('axios');
const Game = require("../models/games.model");
const User = require("../models/User.model");
const isLoggedIn = require('../middleware/isLoggedIn')

//list of all games
router.get("/", (req, res) => {
    axios.get(`https://api.boardgameatlas.com/api/search?name=Catan&client_id=${process.env.API_KEY}`)
       .then((listofGamesFromAPI) => {
           res.json({games: listofGamesFromAPI})
       }).catch((err) => res.json({ errorMessage: err }))
});

// API: games

// 
router.post("/favorite", isLoggedIn, (req, res) => {
    const { id } = req.body.game
    Game.find({ id })
       .then((gameFromDB) => {
           if(!gameFromDB) {
            Game.create({ ...req.body, primary_publisher: req.body.primary_publisher.name })
            .then(newGame => {
                User.findByIdAndUpdate(req.user._id, { $addToSet: { wishist: newGame._id }}, {new: true}).then(updatedUser => {
                    res.status(201).json({ user: updatedUser, game: newGame})
                })
            })
           } else {
            User.findByIdAndUpdate(req.user._id,  { 
                $set: { 
                    wishlist: { 
                        $cond: [ { $in: [ gameFromDB._id, "$arr" ] }, 
                                 { $setDifference: [ "$arr", [ gameFromDB._id ] ] }, 
                                 { $concatArrays: [ "$arr", [ gameFromDB._id ] ] } 
                        ] 
                    }
                }
           }, { new: true }).then(updatedUser => {
            res.status(201).json({ user: updatedUser, game: gameFromDB})
           })
           }
       }).catch((err) => res.json({ errorMessage: err }))
});

router.post("/", (req, res) => {
    Game.create(req.body)
       .then((newGame) => {
           res.json({game: newGame})
       }).catch((err) => res.json({ errorMessage: err }))
});

module.exports = router;