import React, { useState } from 'react'

export default function LoginForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleLogin = (event) => {
        event.preventDefault()
        if(email === "kalyssa@gmail.com" && password === "test"){
            setIsLoggedIn(true)
        }
    }

    return (
        <div>
            <form>
                <label>Email Address</label>
                <input 
                type="email" 
                name="email" 
                value={email} 
                onChange={handleEmailChange}/>

                <label>Password:</label>
                <input 
                type="password" 
                name="pswd" 
                value={password} 
                onChange={handlePasswordChange}/>

                <input 
                type="submit" 
                value="Login" 
                onClick={handleLogin}/>
            </form>
        </div>
    )
}
