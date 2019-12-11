const { error } = require('../helper/resFormat')
const User = require('../models/userModel')

module.exports = async (req, res, next) => {
    let user = await User.findById(req.user)
    if(user.role == 'Admin') {
        next()
    }
    else {
        let reject = [403, 'Invalid token!']
        reject.unshift(res)
        error(reject)
    }
}
