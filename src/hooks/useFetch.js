
import { useCallback, useEffect, useState } from "react";

export const useFetch = (url,token) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(url,{
        headers: {
          // Asegúrate de que el token esté presente
          'Authorization': `Bearer ${token}`
        }
      });
      if (!response.ok) {
        throw new Error("Error fetching data");
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    getData();
  }, [getData]);

  return { data, loading, error };
};
