


// Home Logic

const home = async (req, res) => {
    try {
        res.status(200).send({ message: "Welcome To Our Website using Controllers" })


    } catch (error) {
        console.log(error)
    }
}


// Register Logic
  
const register = async (req, res) => {
    try {
        // res.status(400).send({ message: "Welcome to register page using Controllers" })
        console.log(req.body) 
        res.status(200).json({ messsage: req.body })
    } catch (error) {
        res.status(400).send({ msg: "Page not found" })
    }
}

module.exports = { home, register }
