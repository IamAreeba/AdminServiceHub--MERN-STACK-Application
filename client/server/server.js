const express = require('express')
const app = express()

const PORT = 5000

app.get('/', (req, res) => {
    res.status(200).send("Welcome TO our website")
})

app.get('/register', (req, res) => {
    res.status(200).send("Welcome to registeration page")
})



app.listen(PORT, () => {
    console.log(`App listening on port: http://localhost:${PORT}`)
})