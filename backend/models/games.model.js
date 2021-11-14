const { Schema, model } = require("mongoose");

const gameSchema = new Schema({
    name: String,
    //images.small: String,
    primary_publisher: [String],
    msrp: Number,
    min_players: Number,
    max_players: Number,
    min_playtime: Number,
    max_playtime: Number,
    min_age: Number,
    description: String, 
});

const Game = model ("Game", gameSchema);

module.exports = Game
