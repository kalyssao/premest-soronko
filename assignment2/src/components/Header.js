import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Header() {
    const [weather, setWeather] = useState({})
    // const [description, setDescription] = useState('')
    // const [temperature, setTemperature] = useState('')
    useEffect(() => {
        axios.get('http://api.weatherstack.com/current?access_key=1553943729622d02292886c95ab95383&query=Accra')
        .then((res) => {
            setWeather(res.data.current)
            console.log(weather)
            // setTemperature(res.data.current.temperature)
            // setDescription(res.data.current.weather_descriptions[0])
        })
    },[])
    
    return (
        <div className="header-container">
            <h2>Weather App</h2>
            <h3 style={{textAlign: "center"}}>{ weather && Object.keys(weather).length === 0
                    ?
                        <></>
                    : <div>
                    Current weather in Accra, Ghana is {weather.weather_descriptions[0]} at {weather.temperature} degree celsius 
                    </div>
                }
            </h3>
        </div>
    )
}
