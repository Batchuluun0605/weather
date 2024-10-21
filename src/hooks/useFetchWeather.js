import { useQuery } from "@tanstack/react-query";
import { fetchWeatherByCoords } from "../services/api";

export default function useFetchWeather(geoData) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["weather", geoData],
    queryFn: () => fetchWeatherByCoords(geoData),
  });

  return { data, isLoading, error };
}
