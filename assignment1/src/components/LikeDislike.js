import {useState, React} from 'react'
import '../styles/posts.css'

export default function LikeDislike() {
    const [likes, setLikes] = useState(0)
    const [dislikes, setDislikes] = useState(0)

    function handleLikes() {
        setLikes(likes + 1)
    }

    function handleDislikes() {
        setDislikes(dislikes + 1)
    }

    return (
        <div className="sentiment-container">
            <button className="like" onClick={handleLikes}>Like {likes} </button> 
            <button className="dislike" onClick={handleDislikes}>Dislike {dislikes}</button> 

        </div>
    )
}
