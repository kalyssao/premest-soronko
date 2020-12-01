import React, { useState } from 'react'

export default function Search({ onResponse }) {
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        onResponse(query)
        setQuery('')
    }

    return (
        <div className="search-bar">
            <form>
                <input value={query} onChange={(e) => setQuery(e.target.value)} className="search-bar" type="text"/>
                <button className="btn" type="submit" onClick={(e) => handleSubmit(e, query)}>Search</button>
            </form>
        </div>
    )
}