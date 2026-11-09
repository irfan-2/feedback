import mongoose, { mongo } from "mongoose"

const feedbackSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    feedback: {
        type: String,
        required: true,
        trim: true
    }
}, {timestamps: true})

const feedbackModel = mongoose.model("feedbacks", feedbackSchema)

export default feedbackModel