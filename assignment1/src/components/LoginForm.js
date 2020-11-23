import React, { useState } from 'react'

export default function LoginForm({ handleSubmit }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleLogin = (event) => {
        event.preventDefault()
        if(email === "kalyssa@gmail.com" && password === "test"){
            handleSubmit(true)
        }
    }

    return (
        <div className="form--div">
            <form>
                <label>Email Address: </label>
                <br/>
                <input 
                type="email" 
                name="email" 
                value={email} 
                onChange={handleEmailChange}/>
                <br/>

                <label>Password: </label>
                <br/>
                <input 
                type="password" 
                name="pswd" 
                value={password} 
                onChange={handlePasswordChange}/>

                <input 
                type="submit" 
                value="Login" 
                className="mainButton"
                onClick={handleLogin}/>
            </form>
        </div>
    )
}
