import React from "react";
import { getShortDate } from "../utils";
import { weatherIconUrl } from "../services/api";

const Forecast = ({ forecast }) => {
  return (
    <div className="text-lg font-bold mb-2 bg-white">
      <h2 className="mb-4 font-bold text-lg">Forecast</h2>
      <div className="flex flex-wrap gap-2">
        {forecast.list.slice(0, 5).map((forecastItem, index) => {
          const { dt, weather, main, wind } = forecastItem;

          return (
            <div key={index} className="p-2 w-32 rounded-lg shadow-md">
              <p className="text-lg  font-semibold">{getShortDate(dt)}</p>
              <div className="flex justify-center mb-1">
                <img
                  src={`${weatherIconUrl}${weather[0].icon}.png`}
                  alt={weather[0].description}
                />
              </div>
              <p className="text-xl font-bold">{Math.round(main.temp)}&deg;C</p>
              <p className="font-semibold"> {weather[0].main}</p>
              <div>{Math.round(wind.speed)} m/s</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Forecast;
