// Create instance of express
/* app- This variable holds the created Express app,
which you can use to: Define routes (app.get()), app.post(), etc
Configure middleware (app.use)
Start the server (app.listen()) */


import express from 'express';
import {z} from "zod";

// Creating instance of express
const app = express();
app.use(express.json())
const PORT = process.env.PORT || 3000;

// Define schema

const userSchema = z.object({
    name: z.string(),
    age: z.number().min(18) // age must be number >=18
});

app.post("/user", (req, res)=> {
    try {
        const data = userSchema.parse(req.body); // validate request body
        // if data valid then this line will excute forward.
    } catch (error) {
        res.status(400).json({error: error.errors})
    }
});

app.get("/", (req, res)=> {
    res.send("Mitroooo")
})

// About routes

app.get("/about", (req, res)=> {
    res.send("Good by khatam tata bybybyby")
})


app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))