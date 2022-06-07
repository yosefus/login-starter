const
   express = require("express"),
   app = express()


app.use(require("cors")())
app.use(express.json())

const users = [{ firstName: "avi", lastName: "cohen", email: "avi@gmail.com", password: "1234" }]

app.get("/api/users", (req, res) => {
   res.send(users)
})

app.post("/api/register", (req, res) => {
   const { firstName, lastName, email, password } = req.body
   if (!(firstName && lastName && email && password)) res.status(500).send("missing data")
   users.push({ firstName, lastName, email, password })
   res.send(users)
})


app.listen(4200, () => console.log("server is running"))