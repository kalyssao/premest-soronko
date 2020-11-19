import React from 'react'


export default function NewPost({ title, content, handlePost, handleChange }) {

    const handleSubmit = (e) => {
        e.preventDefault()
        handlePost(title, content)
    }

    return (
        <div className="newPost">
            <h3>New post</h3>
            <form onSubmit={handleSubmit}>

                <label>Title: </label>
                <input type="text" 
                name="title"
                value={title || ""} 
                onChange={(e) => handleChange(e)}/>
                <br/>
                
                <input 
                type="text" 
                name="content"
                value={content || ""}
                placeholder="Enter your post here"
                onChange={(e) =>  handleChange(e)}/>
                <br/>
                <button>Post Blog!</button>
            </form>
        </div>
    )
}
