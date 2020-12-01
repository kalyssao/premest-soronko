import React from 'react'

export default function EditPost({ post, handlePost }) {
    return (
        <div>
            <form onSubmit>
                <label>Title: </label>
                <br/>
                <input type="text"
                className="titleInput"
                name="title"
                value={title|| ""}
                onChange={ (e) => handleChange(e)}/>
                <br/>

                <textarea
                type="text"
                name="content"
                value={content || ""}
                placeholder="Enter your post here"
                onChange={(e) => handleChange(e)}/>
                <br/>

                <button className="mainButton">Re-post Blog!</button>
            </form>
        </div>
    )
}
