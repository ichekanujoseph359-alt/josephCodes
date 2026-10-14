const express = require("express")

const router = express.Router()

const{logger}=require('./middleware/logger.js')

router.use(logger)

const {allUser, newUser} = require("./Usercontroller")

router.get('/alluser', allUser)
router.post('/createuser', newUser)

module.exports = router