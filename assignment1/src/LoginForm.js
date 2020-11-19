import React from 'react'

export default function LoginForm() {
    return (
        <div>
            <form>
                <label>Email Address</label>
                <input type="email" name="email"/>

                <label>
                    Password:
                    <input type="password" name="pswd" />
                </label>

                <input type="submit" value="Login" />
            </form>
        </div>
    )
}
