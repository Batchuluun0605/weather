import React from "react";
import { getFormatedDate } from "../utils";
import { weatherIconUrl } from "../services/api";

const WeatherCard = ({ data }) => {
  const { name, main, weather, sys, wind } = data;
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-lg font-bold">
        {name}, {sys.country}
      </h2>
      <h3 className="text-sm">{getFormatedDate()}</h3>

      <h3 className="mt-2 mb-4 font-semibold">Current weather</h3>
      <div className="flex items-center justify-center mb-4">
        <img
          src={`${weatherIconUrl}${weather[0].icon}@2x.png`}
          alt={weather[0].description}
        />
        <span>
          {Math.round(main.temp)}
          <sup>&deg;C</sup>
        </span>

        <div className="text-right">
          <span className="block font-semibold">{weather[0].main}</span>
          <span className="block text-sm">
            Feels like {Math.round(main.feels_like)}
            <sup>&deg;C</sup>
          </span>
        </div>
      </div>
      <div className="flex justify-between text-sm w-full max-w-md">
        <div className="text-center">
          Wind <br /> {Math.round(wind.speed)}
        </div>
        <div className="text-center">
          Humidity <br /> {main.humidity}%
        </div>
        <div className="text-center">
          Pressure <br /> {main.pressure} mb
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
