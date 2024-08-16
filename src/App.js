// src/App.jsx
import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import WeatherDisplay from './WeatherDisplay';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [city, setCity] = useState('');

  const apiKey = '1f27a35fc2844ccebe333b3be45b3463';

  const handleSearch = async (city) => {
    try {
      setCity(city);
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeather(response.data);
      setError('');
    } catch (err) {
      console.error(err);
      setWeather(null);
      setError('City not found');
    }
  };

  return (
    <div>
      <div className="h-screen  m-5 bg-purple-50  items-center justify-center">
      <h1 className='text-center p-6 bg-gradient-to-r from-orange-400 via-sky-400 to-blue-600 bg-clip-text text-transparent font-bold text-5xl'>Weather Dashboard</h1>
      <div className="flex flex-col items-center p-4">
        <SearchBar onSearch={handleSearch} />
        {error && <p className="text-red-500">{error}</p>}
        {weather && <WeatherDisplay weather={weather} />}
      </div>
    </div>
    </div>
  );
};

export default App;
