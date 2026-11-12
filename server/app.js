import express from "express"
import dotenv from "dotenv"
dotenv.config()
import cors from "cors"
import "./config/database.js"
import feedbackRouter from "./controllers/feedback.js"

const app = express()

app.use(cors({
    origin:[
        "http://localhost:5174",
        "http://127.0.0.1:5174"
    ]
}))

app.use(express.json())

const port = process.env.PORT

app.get("/health", async (req,res) =>{
    res.status(200).json({
        "msg" : "apis are healthy"
    })
})

app.use("/feedback", feedbackRouter)

app.listen(port, () =>{
    console.log("server is running");
    
})