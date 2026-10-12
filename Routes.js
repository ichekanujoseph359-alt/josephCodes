const express = require("express")

const route = express.Router()

const {allUser, newUser} = require("./Usercontroller")

route.get('/alluser', allUser)
route.post('/createuser', newUser)

module.exports = route