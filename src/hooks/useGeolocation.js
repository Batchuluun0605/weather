import { useEffect, useState } from "react";

export default function useGeolocation() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const onSuccess = (e) => {
      setLoading(false);
      setData(e.coords);
      setError(null);
    };

    const onError = (e) => {
      setError(e);
      setLoading(false);
    };

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return { data, error, loading };
}
