const mongoose = require('mongoose') // Moongoose has now power can access all func and prop of mongoose package

const URI = "mongodb://localhost:27017/mern-admin"

mongoose.connect(URI)


const connectDB = async () => {
    try {
        await mongoose.connect(URI)
        console.log("Mongodb connected successfully")
    } catch (error) {
        console.log("Connection Failed")
        process.exit(0)
    }
}

module.exports = connectDB