const User = require('../models/userModel')
const { success, error } = require('../helper/resFormat')

module.exports = {
    create(req, res) {
        User.create(req.body)
            .then(result => {
                result.unshift(res)
                success(result)
            })
            .catch(err => {
                err.unshift(res)
                error(err)
            })
    },

    login(req, res) {
        User.login(req.body)
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