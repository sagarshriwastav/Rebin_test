import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// mongoose.connect('mongodb://localhost:27017/Rebin_testDB', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }, () => {
//     console.log("DB connected");
// });

// const userSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     password: String
// })

// const User = new mongoose.model("User", userSchema)

//routes
app.post("/login", (req, res) => {
    const { email, password } = req.body
    console.log(req.body);
    const user = {
        username: 'sagar@gmail.com',
        password: 'Sagar@1234'
    }
    if (user) {
        if (password === user.password) {
            res.send({ message: "Login Successfully", user: user })
        } else {
            res.send({ message: "Password didn't match" })
        }
    } else {
        res.send({ message: "User not registered." })
    }
})


app.listen(9002, () => {
    console.log("started on port 9002")
})
