import React from 'react'

export default function Logout({ handleLogOut }) {

    return (
        <button className="mainButton" onClick={handleLogOut}>Log Out</button>
    )
}
