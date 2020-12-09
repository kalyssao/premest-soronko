import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState([]);

  function handleInput(e) {
    setQuery(e.target.value);
  }

  function handleSearch() {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=1553943729622d02292886c95ab95383&query=${query}`
      )
      .then((res) => {
        console.log(res.data);
        setWeather(...weather, res.data);
        console.log(weather)
      })
      .catch((err) => {
        console.log(err.info);
      });
    setQuery("");
  }

  return (
    <div>
      <h2>Search</h2>
      <input value={query} onChange={handleInput}></input>
      <button onClick={handleSearch}>Search!</button>

      <h2>Result</h2>
      {
          weather
          && weather.length > 0
          ? <>
            <p>City</p>{weather.request.query}
            <p>Temperature</p> {weather.current.temperature}
            <p>Humidity</p>{weather.current.humidity}
            <p>Description</p>{weather.current.weather_descriptions[0]} 
          </>
          : <></>
      }
      
    </div>
  );
}
