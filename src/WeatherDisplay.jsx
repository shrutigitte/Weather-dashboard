// src/components/WeatherDisplay.jsx
import React from 'react';

const WeatherDisplay = ({ weather }) => {
  // Function to determine the background color based on weather conditions
  const getBackgroundColor = () => {
    if (!weather) return '';

    const weatherCondition = weather.weather[0].main;
    switch (weatherCondition) {
      case 'Rain':
        return 'bg-blue-500 text-white'; // Bluish color for rainy weather
      case 'Clear':
        return 'bg-yellow-400 text-white'; // Sunny color
      case 'Clouds':
        return 'bg-sky-300 text-white'; // Light gray for cloudy weather
      case 'Snow':
        return 'bg-white text-black'; // White for snowy weather
      case 'Drizzle':
        return 'bg-teal-300 text-white'; // Teal color for drizzle
      default:
        return 'bg-sky-300 text-white'; // Default background color
    }
  };

  return (
    <div
      className={`w-full m-10 max-w-md p-4 rounded-lg shadow-lg ${getBackgroundColor()}`}
    >
      <h2 className="text-3xl font-bold mb-2">{weather.name}</h2>
      <p className="text-xl">Temperature: {weather.main.temp}°C</p>
      <p className="text-xl">Humidity: {weather.main.humidity}%</p>
      <p className="text-xl">Wind Speed: {weather.wind.speed} m/s</p>
      <p className="text-xl">Condition: {weather.weather[0].description}</p>
    </div>
  );
};

export default WeatherDisplay;

