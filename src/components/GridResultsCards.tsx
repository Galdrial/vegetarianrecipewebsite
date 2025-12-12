// GridResultsCards component fetches and displays a grid of vegetarian recipes based on search results
// Uses Redux for state management and a custom hook for API calls
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resultsSelector, setResultsCards } from '../redux/ResultsCardsSlice';
import Card from './Card';
import { useFetchRecipes } from './hooks/useFetchRecipes';

function GridResultsCards() {
  // Get cards from Redux store
  const cards = useSelector(resultsSelector);
  const dispatch = useDispatch();
  // Build API URL for vegetarian recipe search
  const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=8&diet=vegetarian`;

  // Types for API response and card data
  type SpoonacularSearchResult = {
    results: Array<{
      id: number;
      title: string;
      image: string;
    }>;
  };
  type CardType = { id: string; title: string; src: string; alt: string };
  // Map API data to card format
  const mapFn = (data: SpoonacularSearchResult): CardType[] =>
    data.results.map((item) => ({
      id: String(item.id),
      title: item.title,
      src: item.image,
      alt: item.title,
    }));
  // Custom hook for fetching recipes
  const { loading, error, data, fetchData, setError } = useFetchRecipes<SpoonacularSearchResult, CardType[]>(url, mapFn);

  // Fetch search results on mount if not already loaded
  React.useEffect(() => {
    if (cards.length === 0) {
      fetchData().then(() => {
        if (data && data.length > 0) dispatch(setResultsCards(data));
      });
    }
  }, [dispatch, cards.length, fetchData, data]);

  // Show loading spinner while fetching data
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-lime-700 mb-4"></div>
        <p className="text-lime-700 text-lg">Loading search results...</p>
      </div>
    );
  }
  // Show error message and retry button if fetch fails
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh] text-center">
        <p className="text-red-700 text-xl font-bold mb-2">{error}</p>
        <button
          className="mt-10 px-4 py-2 bg-lime-700 text-white rounded-3xl hover:bg-lime-800 transition"
          onClick={() => {
            dispatch(setResultsCards([]));
            setError(null);
            fetchData().then(() => {
              if (data && data.length > 0) dispatch(setResultsCards(data));
            });
          }}
        >
          Retry
        </button>
      </div>
    );
  }

  // Render the grid of search result cards
  return (
    <>
      <h2 className='font-playwrite text-lime-700 text-4xl font-bold text-center mt-12'>Results Recipes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1300px] mx-auto px-8 sm:px-20 pt-16 pb-24">
        {cards.length === 0 ? (
          <div className="col-span-full text-center text-lime-700 text-xl">No recipes found.</div>
        ) : (
          cards.map((cardData, index) => (
            <Card
              key={cardData.id || index}
              id={cardData.id}
              src={cardData.src}
              alt={cardData.alt || cardData.title}
              title={cardData.title}
            />
          ))
        )}
      </div>
    </>
  );
}

export default GridResultsCards;