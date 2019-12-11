const router = require('express').Router()
const weaponRouter = require('./weaponRouter')

router.use('/weapon', weaponRouter)

module.exports = router