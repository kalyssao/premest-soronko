import React from 'react'
import Post from './Post'

export default function AllPosts({ posts }) {
    /*function truncateText(someText) {
        if (someText.length > 30) {
        }
    }*/

    return (
        <div className="allPosts">
            <h3>All Posts</h3>
            <ul className="postList">
                {posts.map(post => (<Post key={post.id} /*truncatedPost={truncateText(post)}*/ post={post} />))}
            </ul> 
        </div>
    )
}
