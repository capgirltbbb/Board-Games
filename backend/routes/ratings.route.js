const router = require("express").Router();
const Ratings = require("../models/ratings.model")
const Game = require("../models/games.model");
const isLoggedIn = require("../middleware/isLoggedIn");

//Create Comment
router.post("/", (req, res) => {
    Ratings.create()
    .then((newComment)=>{
        return res.json({comments: newComment});
    }).catch((err) => res.json({ errorMessage: err }))
});

//Update Comment
router.post("/:ratingsId", (req, res) => {
    Ratings.findByIdAndUpdate(req.params.ratingsId, req.body)
    .then((updatedComment) => {
        return res.json({comments: updatedComment});
    }).catch((err) => res.json({ errorMessage: err }))
})

//Delete
router.post("/delete/:ratingsId", isLoggedIn, (req, res) => {
    Ratings.findByIdAndDelete(req.params.ratingsId)
    .then(() => res.status(200).json({ success: true }))
    .catch((err) => res.json({ errorMessage: err }));
})

module.exports = router;