import { useEffect } from 'react';
import { useState } from 'react'
import './App.css'
import WeatherBox from './component/WeatherBox.jsx';
import WeatherButton from './component/WeatherButton.jsx';

// API 조회 URL
const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?';
// API 키
const API_KEY = '5bae92620c690ba69b721cfa67366934';

function App() {
  const [weather, setWeather] = useState(null);

  // 현재 위치 좌표 조회
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      getWeatherCurrentLocation(lat, lon);
    })
  }

  // 현재 위치 좌표로 날씨 조회
  // async : await를 사용 데이터를 가져올 때까지 기다림
  const getWeatherCurrentLocation = async (lat, lon) => {
    const weatherData = `${WEATHER_URL}lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const res = await fetch(weatherData);
    const data = await res.json();
    setWeather(data);
  }

  // useEffect : 컴포넌트가 렌더링 될 때마다 실행
  useEffect(() => {
    getCurrentLocation();
  }, [])

  return (
    <div className='fe-container'>
      <WeatherBox weather={weather} />
      <WeatherButton getCurrentLocation={getCurrentLocation}/>
    </div>
  )
}

export default App
