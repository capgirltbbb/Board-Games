const { Schema, model } = require("mongoose");

const ratingSchema = new Schema({
    stars: {type: Number, max: 5},
    comments: String,
    game: { type: Schema.Types.ObjectId, ref: "Game"}
});

const Ratings = model ("Ratings", ratingSchema);

module.exports = Ratings