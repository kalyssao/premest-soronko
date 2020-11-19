import React from 'react'
import '../styles/posts.css'

export default function NewPost({ title, content, handlePost, handleChange }) {

    const handleSubmit = (e) => {
        e.preventDefault()
        handlePost(title, content)
    }

    return (
        <div className="newPost">
            <h3 className="title">New post</h3>
            <form onSubmit={handleSubmit}>

                <label>Title: </label>
                <br/>
                <input type="text" 
                className="titleInput"
                name="title"
                value={title || ""} 
                onChange={(e) => handleChange(e)}/>
                <br/>
                
                <textarea 
                type="text" 
                name="content"
                value={content || ""}
                placeholder="Enter your post here"
                onChange={(e) =>  handleChange(e)}/>
                <br/>
                <button className="postButton">Post Blog!</button>
            </form>
        </div>
    )
}
