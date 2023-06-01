import { useState } from "react";
function ReviewComponent() {
    const [email, setEmail] = useState('')
    const [review, setReview] = useState('')

    async function addReview(event) {
        event.preventDefault()
        const response = await fetch('http://localhost:1337/api/review', {
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
            <div className="addReview">
                <h1>Add reviews</h1>
                <form className="reviewBox" onSubmit={addReview}>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="E-mail"
                    />
                    <input
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        type="text"
                        placeholder="Add your valuable review..."
                    />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>
        
    );
}

export default ReviewComponent;