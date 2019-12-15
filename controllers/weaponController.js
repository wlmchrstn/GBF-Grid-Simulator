const Weapon = require('../models/weaponModel')
const { success, error } = require('../helper/resFormat')

module.exports = {
    create(req, res) {
        Weapon.create(req.body, req.user)
            .then(result => {
                result.unshift(res)
                success(result)
            })
            .catch(err => {
                err.unshift(res)
                error(err)
            })
    },

    getAll(req, res) {
        Weapon.getAll({})
            .then(result => {
                result.unshift(res)
                success(result)
            })
            .catch(err => {
                err.unshift(res)
                error(err)
            })
    },
    
    search(req, res) {
        Weapon.search(req.query)
            .then(result => {
                result.unshift(res)
                success(result)
            })
            .catch(err => {
                err.unshift(res)
                error(err)
            })
    },

    detail(req, res) {
        Weapon.detail(req.params.weapon)
            .then(result => {
                result.unshift(res)
                success(result)
            })
            .catch(err => {
                err.unshift(res)
                error(err)
            })
    }
}
