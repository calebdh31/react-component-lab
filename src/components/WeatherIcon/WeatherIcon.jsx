
import React from 'react'
import WeatherForecast from '../WeatherForecast/WeatherForecast'

const WeatherIcon = ({img, imgAlt}) => {
  return (
<div className="weather">
  <img src={img} alt={imgAlt}/>
</div>
  )
}

export default WeatherIcon