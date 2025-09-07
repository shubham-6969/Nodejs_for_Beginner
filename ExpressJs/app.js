// Create instance of express
/* app- This variable holds the created Express app,
which you can use to: Define routes (app.get()), app.post(), etc
Configure middleware (app.use)
Start the server (app.listen()) */


import express from 'express';

// Creating instance of express
const app = express();

const PORT = 3000

app.get("/", (req, res)=> {
    res.send("Mitroooo")
})

// About routes

app.get("/about", (req, res)=> {
    res.send("Good by khatam tata bybybyby")
})


app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))