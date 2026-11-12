import axios from "axios"
import { useEffect } from "react";
import { useState } from "react";

function Feedback() {
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")
    const [feedbacks, setFeedbacks] = useState([])

    const getFeedbacks =  async () =>{
        try {
            const response = await axios.get(
                "http://localhost:5000/feedback/get"
            )
            setFeedbacks(response.data.feedbacks)
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(() =>{
        getFeedbacks()
    }, [])

    const addFeedback = async (e) =>{
        e.preventDefault()

        try {
            await axios.post(
                "http://localhost:5000/feedback/create", {name, message}
            )
            setName("")
            setMessage("")
            getFeedbacks()
        } catch (error) {
            console.log(error);
            
        }

    }

    return(
        <div>
            <div>
                <h1>Feedback section</h1>
                <form onSubmit={addFeedback}>
                    <input type="text" 
                    placeholder="enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required

                    />
                    <textarea
                    placeholder="Enter your feedback"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    ></textarea>
                    <button
                    type="submit"
                    >Submit Feedback</button>
                </form>
            </div>
            <div>
                {feedbacks.map((item) =>(
                    <div  key={item._id}>
                    <h2>{item.name}</h2>
                    <p>{item.message}</p>
                </div>))}
            </div>
        </div>
    )

}

export default Feedback