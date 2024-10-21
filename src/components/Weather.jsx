import { useState } from "react";
import useFetchWeather from "../hooks/useFetchWeather";
import useGeolocation from "../hooks/useGeolocation";
import WeatherCard from "./WeatherCard";
import Forecast from "./Forecast";

const Weather = () => {
  const [city, setCity] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const { data: geoData, error, loading } = useGeolocation();
  const {
    data,
    error: weatherError,
    isLoading: weatherLoading,
  } = useFetchWeather(geoData, searchQuery);

  if (loading) {
    return <p className="text-blue-500 text-lg font-semibold">Loading ...</p>;
  }
  console.log(geoData);
  if (error) {
    return (
      <p className="text-red-500 text-lg font-semibold">
        Error: {error.message}
      </p>
    );
  }
  const { currentWeather, forecast } = data || {};

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) {
      setSearchQuery(city.trim());
    }
  };

  return (
    <div className="text-black">
      {error && <p className="text-red-400">{error.message}</p>}
      {weatherError && <p className="text-red-400">{weatherError.message}</p>}

      <form onSubmit={handleSearch}>
        <input
          type="text"
          className="p-2 border border-gray-300 rounded"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <button
          type="submit"
          className="ml-2 p-2 bg-blue-500 text-white rounded"
        >
          Search
        </button>
      </form>
      {currentWeather && (
        <div className="bg-white shadow-md p-6 rounded-lg mb-4 w-full">
          <WeatherCard data={currentWeather} />
        </div>
      )}

      {forecast && <Forecast forecast={forecast} />}
    </div>
  );
};

export default Weather;
