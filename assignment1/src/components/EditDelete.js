import React from 'react'
import '../styles/posts.css'

export default function EditDelete({ posts }) {

    return (
        <div>
            <button className="edit--button">Edit</button>
            <button className="delete--button">Delete</button>
        </div>
    )
}
