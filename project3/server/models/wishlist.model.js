const { Schema, model } = require("mongoose");

const wishlistSchema = new Schema({
    name: String,
    game: { type: Schema.Types.ObjectId, ref: "Game"},
    apiID: String
});

const Wishlist = model ("Wishlist", wishlistSchema);

module.exports = Wishlist