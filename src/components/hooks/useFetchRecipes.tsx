import axios from 'axios';
import { useCallback, useState } from 'react';

// Custom hook to fetch recipes or data from an API
// T: type of the original API response
// R: type of the mapped data used in the component
export function useFetchRecipes<T, R = T[]>(url: string, mapFn: (data: T) => R) {
  // State to indicate if the request is in progress
  const [loading, setLoading] = useState(false);
  // State to handle any errors
  const [error, setError] = useState<string | null>(null);
  // State for the data received from the API
  const [data, setData] = useState<R | null>(null);

  // Function to perform the API request and update state
  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // Perform GET request to the specified URL
      const response = await axios.get<T>(url);
      // Map the received data using the provided function
      setData(mapFn(response.data));
    } catch {
      // Handle network or response errors
      setError('Unable to load recipes. Please try again later.');
    } finally {
      setLoading(false);
    }
  }, [url, mapFn]);

  // Return state and utility functions for the calling component
  return { loading, error, data, fetchData, setError };
}