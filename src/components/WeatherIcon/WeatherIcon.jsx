{/* <div className="weather">
  <h2>Day of the Week</h2>
  <img src="" alt="" />
  <p><span>conditions: </span>current weather conditions</p>
  <p><span>time: </span>time of day</p>
</div> */}

import React from 'react'
import WeatherForecast from '../WeatherForecast/WeatherForecast'

const WeatherIcon = ({img, imgAlt}) => {
  return (
<section className="weather">
  <img src={img} alt={imgAlt}/>
</section>
  )
}

export default WeatherIcon