
// Custom React hook for fetching recipes from an API endpoint
import axios from 'axios';
import { useCallback, useState } from 'react';

export function useFetchRecipes<T, R = T[]>(url: string, mapFn: (data: T) => R) {
  // State for loading indicator
  const [loading, setLoading] = useState(false);
  // State for error message
  const [error, setError] = useState<string | null>(null);
  // State for fetched data
  const [data, setData] = useState<R | null>(null);

  // Function to fetch data from the API
  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // Make GET request to the API
      const response = await axios.get<T>(url);
      // Map the API response to the desired format
      setData(mapFn(response.data));
    } catch {
      // Set error message if fetch fails
      setError('Unable to load recipes. Please try again later.');
    } finally {
      setLoading(false);
    }
  }, [url, mapFn]);

  // Return loading, error, data, and fetchData function
  return { loading, error, data, fetchData, setError };
}