import express from "express"
import feedbackModel from "../models/Feedback.js"

const router = express.Router()

router.post("/create", async (req,res) =>{
    try {
        const {name, message} = req.body

        await feedbackModel.create({
            name,
            message
        })

         res.status(201).json({
            "msg" : "feedback added successfully"
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            "msg" : "internal server error"
        })
    }
})

router.get("/get", async (req,res) =>{
    try {
        const feedbacks = await feedbackModel.find()

        res.status(200).json({
            'msg' : "here are all feedbacks", feedbacks
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            "msg" : "internal server error"
        })
    }
})

export default router 