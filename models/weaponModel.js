const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const weaponSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true
    },
    nickname: {
        type: String,
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
    gridPic: {
        type: String,
        required: true
    },
    mhPic: {
        type: String,
        required: true
    }
});

weaponSchema.plugin(uniqueValidator);
var Weapon = mongoose.model('Weapon', weaponSchema);

Weapon.create = async function(data) {
    return new Promise(async function(resolve, reject) {
        Weapon.create(data)
            .then(response => {
                let result = {
                    name: response.name,
                    level: response.level,
                    attack: response.attack,
                    health: response.health,
                    gridPic: response.gridPic,
                    mhPic: response.mhPic
                }
                resolve([201, result, 'Weapon created!'])
            })
            .catch(err => {
                reject([400, 'Failed to create weapon!'])
            })
    })
}

Weapon.getAll = async function(data) {
    return new Promise(async function(resolve, reject) {
        let all = await Weapon.find(data).select(['_id', 'name', 'gridPic'])
        resolve([200, all, 'Here is all the weapons!'])
    })
}

Weapon.search = async function(data) {
    return new Promise(async function(resolve, reject) {
        let weapon = await Weapon.find({name: data, nickname: data})
        resolve([200, weapon, 'Here is the result!'])
    })
}
