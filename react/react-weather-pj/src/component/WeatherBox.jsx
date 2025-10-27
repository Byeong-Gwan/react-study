import React from "react";

const WeatherBox = ({weather}) => {
    console.log('weather? ', weather);
    return (
    <div>
        <div className="fe-weather-box">
            <h2>{weather?.name}</h2>
            <h3>{weather?.main?.temp}</h3>
            <h3>{weather?.weather[0]?.description}</h3>
        </div>
    </div>
    )
}


export default WeatherBox;
