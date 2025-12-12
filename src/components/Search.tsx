// Search component for finding vegetarian recipes using Spoonacular API
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setResultsCards } from '../redux/ResultsCardsSlice';
import { useFetchRecipes } from './hooks/useFetchRecipes';

function Search() {
  // State for the search query
  const [query, setQuery] = React.useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Build the API URL for searching recipes
  const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=8&diet=vegetarian&query=${encodeURIComponent(query)}`;

  // Types for API response and card data
  type SpoonacularSearchResult = {
    results: Array<{ id: number; title: string; image: string; }>;
  };
  type Card = { id: string; title: string; src: string; alt: string };
  // Map API data to card format
  const mapFn = (data: SpoonacularSearchResult): Card[] => Array.isArray(data.results)
    ? data.results.map((item) => ({
        id: String(item.id),
        title: item.title,
        src: item.image,
        alt: item.title,
      }))
    : [];
  // Custom hook for fetching search results
  const { data, loading, error, fetchData, setError } = useFetchRecipes<SpoonacularSearchResult, Card[]>(url, mapFn);

  // Handle search button click or Enter key
  const handleSearch = async () => {
    if (!query.trim()) return;
    await fetchData();
  };

  // When new data arrives, update Redux and navigate
  React.useEffect(() => {
    if (data && data.length > 0) {
      dispatch(setResultsCards(data));
      navigate('/search');
      setQuery('');
    }
  }, [data, dispatch, navigate, setQuery]);

  // Handle input change
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  // Handle Enter key in input
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Render the search input and button
  return (
    <div className="flex-1 min-w-[200px] mx-4 order-3 sm:order-none w-full">
      <div className="relative w-full">
        <input
          type="text"
          className="text-gray-700 rounded-full px-4 py-2 w-full pr-10 bg-white border border-gray-400 focus:outline-lime-700"
          placeholder="Explore and Get Cooking"
          value={query}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          disabled={loading}
          aria-label="Search recipes by keyword"
        />
        <button
          className="absolute bg-transparent inset-y-0 right-1 flex items-center cursor-pointer text-gray-500"
          onClick={handleSearch}
          disabled={loading}
          aria-label="Submit search"
        >
          {loading ? (
            <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-lime-700 mr-2"></span>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
            </svg>
          )}
        </button>
        {/* Error modal for failed search */}
        {error && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center max-w-xs w-full relative">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl font-bold focus:outline-none mr-1"
                onClick={() => setError(null)}
                aria-label="Close error modal"
              >
                &times;
              </button>
              <span className="text-red-700 text-lg font-semibold mb-4 text-center">{error}</span>
              <button
                className="px-5 py-2 bg-lime-700 text-white rounded-3xl hover:bg-lime-800 transition text-base font-semibold"
                onClick={handleSearch}
                disabled={loading}
              >
                Retry
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;