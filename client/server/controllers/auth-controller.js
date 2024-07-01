


// Home Logic

const home = async (req, res) => {
    try {
        res.status(200).send("Welcome To Our Website using Controllers")


    } catch (error) {
        console.log(error)
    }
}


// Register Logic
  
const register = async (req, res) => {
    try {
        res.status(400).send("Welcome to register page using Controllers")
    } catch (error) {
        res.status(400).send({ masg: "Page not found" })
    }
}

module.exports = { home, register }
