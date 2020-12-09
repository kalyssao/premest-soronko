import React from 'react'

export default function WeatherList({ results }) {
    
    return (
        <div className="weather-list">
            <h3 style={{textAlign: "center"}}>Previous Searches</h3>
            {results.map(result =>
                <h5 className="weather-container" key={results.indexOf(result)}>{result.request.query}, {result.current.weather_descriptions[0]}, {result.current.temperature}</h5>
            )}
        </div>
    )
}
