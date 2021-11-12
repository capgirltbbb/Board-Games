const router = require("express").Router();
const Wishlist = require("../models/wishlist.model");
const Game = require("../models/games.model");
const isLoggedIn = require("../middleware/isLoggedIn");

//list of all games
router.get("/", isLoggedIn, (req, res) => {
    Wishlist.find()
       .then((listonWishlist) => {
         return res.json(listonWishlist)
       }).catch((err) => res.json({ errorMessage: err }))
});

//Adding game to wishlist
router.post("/", isLoggedIn, (req, res) => {
    Wishlist.create(req.body)
    .then(createdGameFromDB => {
        return res.json({game: createdGameFromDB})
    // }).catch((err) => res.json({ errorMessage: err }))
    }).catch((err) => console.log("💥",err))
});

//Delete
router.post("/delete/:gameId", isLoggedIn, (req, res) => {
    Wishlist.findByIdAndDelete(req.params.gameId)
    .then(() => res.status(200).json({ success: true }))
    .catch((err) => res.json({ errorMessage: err }));
})

module.exports = router;