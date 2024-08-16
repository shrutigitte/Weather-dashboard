import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city) {
      onSearch(city);
      setCity('');
    }
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <input
        type="text"
        className="p-2 border rounded-l-lg placeholder-blue-400 text-blue-400 focus:outline-none focus:ring-1 focus:ring-orange-400"
        placeholder="Enter city name" 
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        className="p-2.5 bg-orange-500 text-white rounded-r-lg"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
