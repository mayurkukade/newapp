const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')


router.route('/usercreate').post(userController.createUser)
router.route('/getuser').get(userController.getUser)

module.exports = router