const router = require("express").Router();
const Ratings = require("../models/ratings.model")
const Game = require("../models/games.model");
const isLoggedIn = require("../middleware/isLoggedIn");

//list of all comments
router.get("/", (req, res) => {
    Ratings.find()
       .then((listRatings) => {
         return res.json(listRatings)
       }).catch((err) => res.json({ errorMessage: err }))
});

//Create Comment
router.post("/", (req, res) => {
    Ratings.create(req.body)
    .then((newComment) => {
        return res.json({comments: newComment});
    }).catch((err) => res.json({ errorMessage: err }))
});

//Update Comment
router.post("/:ratingsId", (req, res) => {
    Ratings.findByIdAndUpdate(req.params.ratingsId, req.body)
    .then((updatedComment) => {
        return res.json({comments: updatedComment});
    }).catch((err) => res.json({ errorMessage: err }))
});

//Delete
router.post("/delete/:ratingsId", (req, res) => {
    Ratings.findByIdAndDelete(req.params.ratingsId)
    .then(() => res.json({ success: true }))
    .catch((err) => res.json({ errorMessage: err }));
})

module.exports = router;