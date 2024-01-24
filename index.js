const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.get("/login", (req, res) => {
    res.send({ message: "Welcome to the Login page" })
})

app.use(express.json())
app.post("/login", (req, res) => {
    const info = req.body
    const {username, password} = req.body

    const user = "Landon"
    const pass = "pass123"
    if (user === username && pass === password) {
        res.send("Welcome")
    }
    else {
        res.send("Sorry could not find you")
    }
})

app.listen(3000, () => {
    console.log("\n *** Server running on port 3000 http://localhost:3000 ***\n")
})