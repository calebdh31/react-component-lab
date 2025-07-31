import React from 'react';
import './WeatherForecast.css';
import WeatherData from '../WeatherData/WeatherData.jsx';
import WeatherIcon from '../WeatherIcon/WeatherIcon.jsx';

const WeatherForecast = ({ weatherForecasts }) => {
  return (
   <div className="weather">
       {weatherForecasts.map((weatherForecasts) => (
        <>
        <WeatherData day={weatherForecasts.day} conditions={weatherForecasts.conditions} time={weatherForecasts.time} img={weatherForecasts.img} imgAlt={weatherForecasts.imgAlt}/>
        <WeatherIcon img={weatherForecasts.img} />
        </>
      ))}
    </div>
  )
}

export default WeatherForecast