import React from "react";

const WeatherButton = ({getCurrentLocation}) => {
    
    return (
    <div className="fe-weather-button">
        <button className="fe-weather-button__button" onClick={getCurrentLocation}>Current Location</button>
        <button className="fe-weather-button__button">Search Location</button>
    </div>
    )
}


export default WeatherButton;
