const Summon = require('../models/summonModel')
const { success, error } = require('../helper/resFormat')

module.exports = {

    create(req, res) {
        Summon.create(req.body, req.user)
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
        Summon.getAll({})
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
        Summon.search(req.body)
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
        Summon.detail(req.params.summon)
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
