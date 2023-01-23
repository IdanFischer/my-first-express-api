import express, { request, response } from "express";

const app = express()
app.use(express.json())

let instructors = ["Jiho", "Todd"] // this doesn't change

app.post("/instructors", (req, res) => {
    // take an array of new instructors and merge with existing
    const newInstructors = req.body.instructors
    instructors = [...instructors, ...newInstructors]
    // save to databae
    res.send(instructors)
})

// now we just need to list some valid requests
app.get("/test", (request, response) => {
    console.log("Test Request Made.)")
    response.send("😀 Our API fricken works! 😀")
})
    // request (req) comes first, response (res) comes second
    // everything needs a req and res
app.get("/instructors", (request, response) => {
    // get from database
    response.send(instructors)
})


app.get("/secure", (request, response) => {
    response.status(401).send("Not authorized.")
})

app.post("/students", (req, res) => {
    // we need to handle the post request (body)
    const newStudent = req.body
    // save to database
    console.log(newStudent)
    res.send(newStudent)
})


app.listen(3030, () => {
    console.log("Listening on http://local:3030...")
})
