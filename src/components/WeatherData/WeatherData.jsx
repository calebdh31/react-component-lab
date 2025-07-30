import React from 'react';

const WeatherData = ({ day, conditions, time }) => {
  return (
    <section className="weather">
      <h2>{day}</h2>
      <p><span>Current weather conditions:</span> {conditions}</p>
      <p><span>Time of Day:</span> {time}</p>
      </section>
  );
};

export default WeatherData;