import React from 'react'

export default function SignUpForm() {
    return (
        <div>
            <form>
                <label>Name</label>
                <input type="name" name="name"/>

                <label>Email</label>
                <input type="email" name="email"/>

                <label>Password</label>
                <input type="password" name="pswd" />
                
                <label>Password</label>
                <input type="password" name="pswd" />

                <input type="submit" value="Sign Up" />
            </form>
        </div>
    )
}
