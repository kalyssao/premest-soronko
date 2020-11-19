import {useState, React} from 'react'

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
        <div>
            <button onClick={handleLikes}>Like </button> {likes}
            <button onClick={handleDislikes}>Dislike</button> {dislikes}

        </div>
    )
}
