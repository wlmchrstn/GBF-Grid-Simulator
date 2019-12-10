const mongoose = require("mongoose");

const gridSchema = new mongoose.Schema({
    mainHand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Weapon'
    },
    slot1: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Weapon'
    },
    slot2: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Weapon'
    },
    slot3: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Weapon'
    },
    slot4: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Weapon'
    },
    slot5: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Weapon'
    },
    slot6: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Weapon'
    },
    slot7: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Weapon'
    },
    slot8: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Weapon'
    },
    slot9: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Weapon'
    },
    mainSummon: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Summon'
    },
    summon1: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Summon'
    },
    summon2: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Summon'
    },
    summon3: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Summon'
    },
    summon4: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Summon'
    },
});


var Grid = mongoose.model('Grid', gridSchema);