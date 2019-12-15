const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');
const User = require('./userModel')

const summonSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
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
    msPic: {
        type: String,
        required: true
    },
    inventPic: {
        type: String,
        required: true
    }
});

weaponSchema.plugin(uniqueValidator);
var Summon = mongoose.model('Summon', summonSchema);

Summon.create = async function(data, auth) {
    return new Promise(async function(resolve, reject) {
        let admin = await User.findbyId(auth)
        if(admin.role == 'Admin' || admin.role !== 'User')
        Summon.create(data)
            .then(response => {
                let result = {
                    name: response.name,
                    level: response.level,
                    attack: response.attack,
                    health: response.health,
                    gridPic: response.gridPic,
                    msPic: response.msPic,
                    inventPic: response.inventPic
                }
                resolve([201, result, 'Summon created!'])
            })
            .catch(err => {
                reject([400, 'Failed to create summon!'])
            })
    })
}

Summon.getAll = async function(data) {
    return new Promise(async function(resolve, reject) {
        let summon = await Summon.find(data).select(['_id', 'name', 'gridPic'])
        resolve([200, summon, 'Here is all the summons!'])
    })
}

Summon.search = async function(data) {
    return new Promise(async function(resolve, reject) {
        let summon = await Summon.find(data)
        resolve([200, summon, 'Here is the result!'])
    })
}

Summon.detail = async function(data) {
    return new Promise(async function(resolve, reject) {
        let summon = await Summon.findById(data)
        if(summon) {
            let result = {
                _id: summon._id,
                name: summon.name,
                gridPic: summon.gridPic,
                msPic: summon.msPic,
                inventPic: summon.inventPic
            }
            resolve([200, result, 'Here is the detail!'])
        }
        else {
            reject([404, 'Not Found!'])
        }
    })
}
