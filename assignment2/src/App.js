import WeatherList from './components/WeatherList'
import Weather from './components/Weather'
import Header from './components/Header'
import Search from './components/Search'
import './App.css'
import React, { useState } from 'react'
import axios from 'axios'

function App() {
    const [results, setResult] = useState([])

    function handleQuery (query) {
        axios.get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_ACCESS_KEY}&query=${query}`)
        .then((res) => {
            console.log(res.data)
            setResult(...results, res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
    <>
        <Header/>
        <div className="container">
            <Search onResponse={handleQuery}/>
            <WeatherList />
            <Weather/>
        </div>
    </>
  );
}

export default App;
