import React, { useState } from 'react'
import NewPost from '../components/NewPost'
import AllPosts from '../components/AllPosts'
import {v1 as uuid} from 'uuid'

export default function Home() {
    const [ title , setTitle] = useState('')
    const [ content , setContent] = useState('')
    const [ post, setPost ] = useState([])

    const handlePost = (title, content) => {
        setPost([
            ...post, 
            { 
                id: uuid(),
                title: title, 
                content: content, 
            }
        ])
        console.log('success')
        setTitle('')
        setContent('')
    }

    const handleChange = (e) => {
        console.log(e.target)
        switch (e.target.name) {
            case "title":
                setTitle(e.target.value)
                break;
        
            default:
                setContent(e.target.value);
                break
        }
    }

    return (
        <div>
            <NewPost title={title} content={content} handlePost={handlePost} handleChange={handleChange} />
            <AllPosts posts={post}/>
        </div>
    )
}
