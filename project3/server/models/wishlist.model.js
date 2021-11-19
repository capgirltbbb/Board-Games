const { Schema, model } = require("mongoose");

const wishlistSchema = new Schema({
    name: String,
    game: { type: Schema.Types.ObjectId, ref: "Game"},
    user: { type: Schema.Types.ObjectId, ref: "User"},
});

const Wishlist = model ("Wishlist", wishlistSchema);

module.exports = Wishlist