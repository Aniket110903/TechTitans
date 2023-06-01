import "./ReviewComponent.css"
import { useState } from "react";
function ReviewComponent() {
    const [email, setEmail] = useState('')
    const [review, setReview] = useState('')

    async function addReview(event) {
        event.preventDefault()
        const response = await fetch('https://swiftfix-backend.onrender.com/api/review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                review
            }),
        })
        const data = await response.json()
        console.log(data)
    }

    return (
        <>
            <div className="addReview px-[10%]">
                <h1 className="pt-4 px-auto">Add reviews</h1>
                <form className="reviewBox text-xl w-[40%] mx-auto" onSubmit={addReview}>
                    <input className="w-full mt-4 rounded-md py-2 pl-2 shadow-md outline-none"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="E-mail"
                    />
                    <br />
                    <input
                        className="w-full mt-4 rounded-md py-2 pl-2  shadow-md outline-none"
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        type="text"
                        placeholder="Add your valuable review..."
                    />
                    <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ease-in-out duration-300 hover:shadow-lg mt-4 mx-[37%]" type="submit" value="Submit" />
                </form>
            </div>
        </>

    );
}

export default ReviewComponent;