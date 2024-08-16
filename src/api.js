// src/api.js
import axios from 'axios';

const apiKey = '1f27a35fc2844ccebe333b3be45b346';

export const fetchWeatherData = async (city) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching the weather data:", error);
    throw error;
  }
};
