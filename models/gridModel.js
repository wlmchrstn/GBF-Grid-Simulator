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

import User from './userModel'

Grid.create = async function(data, auth) {
    return new Promise(async function(resolve, reject) {
        let dupe = await Grid.findOne({ users: auth })
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
        let grid = await Grid.findOne({ users: data }).populate(['slot1','slot2','slot3','slot4','slot5','slot6','slot7','slot8','slot9','mainSummon','mainHand','summon1','summon2','summon3','summon4'])
        resolve([200, grid, 'Here is your grid!'])
    })
}

Grid.update = async function(data, auth, id) {
    return new Promise(async function(resolve, reject) {
        let user = await User.findById(auth)
        await Grid.findByIdAndUpdate(id, data)
            .then(result => {
                resolve([200, result, 'Grid saved!'])
            })
            .catch(err => {
                reject([400, 'Failed to save grid!'])
            })
    })
}
