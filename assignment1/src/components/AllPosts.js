import React from 'react'
import Post from './Post'

export default function AllPosts({ posts }) {
    
    return (
        <div className="allPosts">
            <h3>All Posts</h3>
            <ul className="postList">
                {posts.map(
                    post => (
                    <Post key={post.id} post={post} />
                    )
                )}
            </ul> 
        </div>
    )
}
