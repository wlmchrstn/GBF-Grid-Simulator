const router = require('express').Router()
const authen = require('../middleware/authentication')
const author = require('../middleware/authorization')
const weaponController = require('../controllers/weaponController')

router.post('/create', authen, author, weaponController.create)
router.get('/get/all', weaponController.getAll)
router.get('/get/one/:id', weaponController.detail)
router.get('/get/search', weaponController.search)

module.exports = router