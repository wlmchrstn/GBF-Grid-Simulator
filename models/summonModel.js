const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const summonSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    level: {
        type: Number,
        required: true
    },
    attack: {
        type: Number,
        required: true
    },
    health: {
        type: Number,
        required: true
    },
    rarity: {
        type: Number,
        required: true
    },
    gridPic: {
        type: String,
        required: true
    },
    msPic: {
        type: String,
        required: true
    }
});

weaponSchema.plugin(uniqueValidator);
var Summon = mongoose.model('Summon', summonSchema);