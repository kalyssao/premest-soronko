import WeatherList from './components/WeatherList'
import Weather from './components/Weather'
import Header from './components/Header'
import Search from './components/Search'

import './App.css'
import React, { useState } from 'react'
import axios from 'axios'

function App() {
    const [results, setResult] = useState([])
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    function handleQuery (query) {
        axios.get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_ACCESS_KEY}&query=${query}`)
        .then((res) => {
            console.log(res.data)
            setResult([...results, res.data])
            console.log(results)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    function handleLogIn(){
        setIsLoggedIn(true)
    }

    function handleLogOut() {
        setIsLoggedIn(false)
    }



    return (
    <>
        <Header/>
        <div className="container">
            
            {/* <Weather/> */}
            {
                isLoggedIn
                ?
                <>
                    <Search onResponse={handleQuery}/>
                    
                    {results.length !== 0
                    ? 
                    <>
                        <WeatherList results={results}/>
                        
                    </>:<></>}
                    <button className="btn" onClick={handleLogOut} style={{marginTop: "75px"}}>Log Out</button>
                </>
                : <><button className="btn" onClick={handleLogIn}>Log In</button></>
            }
    
        </div>
    </>
  );
}

export default App;
