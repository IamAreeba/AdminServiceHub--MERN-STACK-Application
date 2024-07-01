
const express = require('express')
const router = express.Router()
const { home, register } = require('../controllers/auth-controller')
const authController = require('../controllers/auth-controller')

// router.get('/', (req, res) => {
//     res.status(200).send("Welcome TO our website through route")
// })

// When we do with this method we can do chainig like using get, post etc at the same time
// router.route('/').get((req, res) => {
    // res.status(200).send("Welcome To Our Website")
// })

router.route('/').get(authController.home)

// router.route('/register').get((req, res) => {
//     res.status(200).send("Welcome to registeration page")
// })

router.route('/register').get(authController.register)


module.exports = router