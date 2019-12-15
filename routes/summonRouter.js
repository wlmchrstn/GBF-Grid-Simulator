const router = require('express').Router()
const authen = require('../middleware/authentication')
const author = require('../middleware/authorization')
const summonController = require('../controllers/summonController')

router.post('/create', authen, author, summonController.create)
router.get('/get/all', summonController.getAll)
router.get('/get/search', summonController.search)
router.get('/get/detail/:summon', summonController.detail)