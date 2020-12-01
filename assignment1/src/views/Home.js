import React, { useState } from 'react'
import NewPost from '../components/NewPost'
import AllPosts from '../components/AllPosts'
import Logout from '../components/Logout'
import {v1 as uuid} from 'uuid'
import '../styles/posts.css'

export default function Home() {
    const [ title , setTitle] = useState('')
    const [ content , setContent] = useState('')
    const [ posts, setPosts ] = useState([])
    const [isLoggedIn, setIsLoggedIn] = useState(true)

    const handlePost = (title, content) => {
        setPosts([
            ...posts, 
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
        switch (e.target.name) {
            case "title":
                setTitle(e.target.value)
                break;
        
            default:
                setContent(e.target.value);
                break
        }
    }

    const handleLogOut = () => {
        console.log('logged out')
        setIsLoggedIn(true)
    }

    return (
        <>
        <Logout handleLogout={handleLogOut}/>
        <div className="homeDiv">
            {/*<Post post={{title: "helloworld", content: 'some blog post'}}/>
            */}
            <NewPost title={title} content={content} handlePost={handlePost} handleChange={handleChange} />
            <AllPosts posts={posts}/>
        </div>
        </>
    )
}
