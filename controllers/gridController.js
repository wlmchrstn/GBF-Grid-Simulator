const Grid = require('../models/gridModel')
const { success, error } = require('../helper/resFormat')

module.exports = {

    create(req, res) {
        Grid.create(req.body, req.user)
            .then(result => {
                result.unshift(res)
                success(result)
            })
            .catch(err => {
                err.unshift(err)
                error(err)
            })
    },

    detail(req, res) {
        Grid.detail(req.user)
            .then(result => {
                result.unshift(res)
                success(result)
            })
            .catch(err => {
                err.unshift(res)
                error(err)
            })
    },

    update(req, res) {
        Grid.update(req.body, req.user, req.params.grid)
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
