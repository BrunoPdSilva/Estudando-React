import { useState, useEffect } from 'react';

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);

      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error('Não foi possível buscar os dados.');
        }
        const json = await res.json();

        setIsPending(false);
        setData(json);
      } catch (err) {
        setIsPending(false);
        setError(err);

        console.log(err.message);
      }
    };

    fetchData(url);
  }, [url]);

  return { data, isPending, error };
}
