import { useState } from "react";
import './LoginPage.css'
function LoginPage() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function registerUser(event) {
        event.preventDefault()
        const response = await fetch('http://localhost:1337/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password
            }),
        })
        const data = await response.json()
        console.log(data)
    }

    return (
        <>
            <div class="containerLogin">
                <form id="form" class="form">
                    <h2>LogIn</h2>
                    <div class="formControl">
                        <label for="email">Email</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div class="formControl">
                        <label for="password">Enter</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Enter your password"
                        />
                    </div>

                    <button>Submit</button>
                </form>

            </div>
            <label className="newAccount">Don't have an account?<span><a href="/SignUp">Sign up</a></span></label>
        </>
    );

}
export default LoginPage;