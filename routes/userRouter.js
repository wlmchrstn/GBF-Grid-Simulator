const router = require('express').Router()
const authen = require('../middleware/authentication')
const author = require('../middleware/authorization')
const userController = require('../controllers/userController')

router.post('/create', userController.create)
router.post('/login', userController.login)

module.exports = router