import React from 'react';

const WeatherData = ({ day, conditions, time }) => {
  return (
    <div className="weather">
      <h2>{day}</h2>
      <p><span>Current weather conditions:</span> {conditions}</p>
      <p><span>Time of Day:</span> {time}</p>
      </div>
  );
};

export default WeatherData;