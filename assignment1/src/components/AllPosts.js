import React from 'react'

export default function AllPosts({ posts }) {
    return (
        <div>
            <h3>All Posts</h3>
            <ul>
                {posts.map(item => {
                    <li key={item.id}>{item.title}, {item.content}</li>
                })}
            </ul>
        </div>
    )
}
