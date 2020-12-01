import React, { useState } from 'react'
import LikeDislike from './LikeDislike'
import EditDelete from './EditDelete'

export default function Post({ post }) {
    const [readMore, setReadMore] = useState(false)
    let date = new Date().toLocaleDateString()

    function preview(someText) {
        return someText.substr(0, 100) + " ... "
    }

    function showFullText() {
        setReadMore(true)
    }

    return (
        <div className="postdiv">
            <h4>{post.title}</h4>
            {
                post.content.length >= 30
                ? 
                <> 
                    {preview(post.content)}
                    { readMore
                    ? post.content
                    : <button onClick={showFullText}>View More</button> 
                    }
                </> 
                : post.content
            }
            <p>Posted on {date} by Kalyssa A. Owusu</p>
            {/*<button className="edit--button">Edit</button>
            <button className="delete--button">Delete</button>*/}
            <LikeDislike />
            <EditDelete />
        </div>
    )
}