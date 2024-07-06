const express = require('express')
const app = express()
const connectDB = require('./utils/db')

const PORT = 5000

app.use(express.json())   // Middleware 

app.use('/api/auth', require('./router/auth-route'))


connectDB().then(() => {  // connectDB func return promise cuz we are using await
    app.listen(PORT, () => {
        console.log(`App listening on port: http://localhost:${PORT}`)
    })
})
