const express = require('express')
const app = express()

const PORT = 5000

app.use(express.json())

app.use('/api/auth', require('./router/auth-route'))




app.listen(PORT, () => {
    console.log(`App listening on port: http://localhost:${PORT}`)
})