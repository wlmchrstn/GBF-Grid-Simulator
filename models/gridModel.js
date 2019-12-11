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
    users: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

var Grid = mongoose.model('Grid', gridSchema);

Grid.create = async function(data, id) {
    return new Promise(async function(resolve, reject) {
        let dupe = await Grid.findOne({ users: id })
        if(!dupe) {
            Grid.create(data)
                .then(response => {
                    resolve([201, response, 'Grid saved!'])
                })
                .catch(err => {
                    reject([400, 'Failed to save grid!'])
                })
        }
        else {
            reject([406, 'Failed to save grid! You already have one!'])
        }
    })
}

Grid.detail = async function(data) {
    return new Promise(async function(resolve, reject) {
        let grid = await Grid.findOne({ users: data })
        resolve([200, grid, 'Here is your grid!'])
    })
}
