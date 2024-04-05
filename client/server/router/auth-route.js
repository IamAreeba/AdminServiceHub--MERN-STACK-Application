
const express = require('express')
const router = express.Router()

// router.get('/', (req, res) => {
//     res.status(200).send("Welcome TO our website through route")
// })

// When we do with this method we can do chainig like using get, post etc at the same time
router.route('/').get((req, res) => {
    res.status(200).send("Welcome To Our Website")
})

router.route('/register').get((req, res) => {
    res.status(200).send("Welcome to registeration page")
})



module.exports = router