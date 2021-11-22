import React, { useState, useEffect } from 'react';

const useJsonFetch = (url, opts) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, opts);
        if (response.ok) {
          const json = await response.json();
          setData(json);
        } else {
          setError(`${response.status}: ${response.statusText}`);
        }
      } catch (err) {
        setError(err.toString());
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url, opts]);

  return { data, isLoading, error };
};

export default useJsonFetch;
