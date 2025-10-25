import { useEffect } from 'react';
import { useState } from 'react'
import './App.css'
import WeatherBox from './component/WeatherBox.jsx';

const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?';
const API_KEY = '5bae92620c690ba69b721cfa67366934';
// lat={lat}&lon={lon}&appid={API key}
function App() {
  const [count, setCount] = useState(0);
  const [weather, setWeather] = useState(null);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      getWeatherCurrentLocation(lat, lon);
    })
  }

  const getWeatherCurrentLocation = async (lat, lon) => {
    const weatherData = `${WEATHER_URL}lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const res = await fetch(weatherData);
    const data = await res.json();
    setWeather(data);
  }

  useEffect(() => {
    getCurrentLocation();
  }, [])

  return (
    <div>
      <WeatherBox weather={weather} />
      <div></div>
    </div>
  )
}

export default App
