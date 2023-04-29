import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url, method, data = null) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        let result;

        switch (method) {
          case 'GET':
            result = await axios.get(url);
            break;
          case 'POST':
            result = await axios.post(url, data);
            break;
          case 'PUT':
            result = await axios.put(url, data);
            break;
          case 'DELETE':
            result = await axios.delete(url);
            break;
          default:
            throw new Error(`Unsupported HTTP method: ${method}`);
        }

        setResponse(result.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, method, data]);

  return { response, error, isLoading };
};

export default useFetch;