import axios from "axios";

const weatherUrl = "https://api.openweathermap.org/data/2.5";
const currentWeatherUrl = `${weatherUrl}/weather`;

const apiKey = import.meta.env.VITE_API_KEY;
export const fetchWeatherByCoords = async (geoData) => {
  if (!geoData?.latitude || !geoData?.longitude) return;

  const response = await axios.get(currentWeatherUrl, {
    params: {
      lat: geoData.latitude,
      lon: geoData.longitude,
      units: "metric",
      appid: apiKey,
    },
  });
  console.log(response);
  return response;
};
