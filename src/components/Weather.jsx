import useFetchWeather from "../hooks/useFetchWeather";
import useGeolocation from "../hooks/useGeolocation";

const Weather = () => {
  const { data: geoData, error, loading } = useGeolocation();
  const {
    data,
    error: weatherError,
    isLoading: weatherLoading,
  } = useFetchWeather(geoData);

  if (loading) {
    return <p className="text-blue-500 text-lg font-semibold">Loading ...</p>;
  }

  if (error) {
    return (
      <p className="text-red-500 text-lg font-semibold">
        Error: {error.message}
      </p>
    );
  }

  return (
    <div className=" bg-gradient-to-b from-blue-400 to-indigo-600 shadow-lg rounded-lg p-6 mt-10 text-white">
      <h2 className="text-3xl font-bold text-gray-800 mb-4 ">
        Your coordinates
      </h2>
      {data?.data && (
        <div>
          <h2>Current weather for {data?.data.name}</h2>
        </div>
      )}
    </div>
  );
};

export default Weather;
