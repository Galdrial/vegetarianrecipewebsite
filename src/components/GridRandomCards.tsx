// GridRandomCards component fetches and displays a grid of random vegetarian recipes

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cardSelector, setRandomCards } from '../redux/RandomCardsSlice';
import Card from './Card';
import { useFetchRecipes } from './hooks/useFetchRecipes';

function GridRandomCards() {
  // Get the list of cards from Redux store
  const cards = useSelector(cardSelector);
  // Get the dispatch function from Redux
  const dispatch = useDispatch();
  // Get the API key from environment variables
  const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
  // Build the API URL for fetching random vegetarian recipes
  const url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=8&include-tags=vegetarian`;

  // Define the expected structure of the API response
  type SpoonacularRandomResult = {
    recipes: Array<{
      id: number;
      title: string;
      image: string;
      instructions?: string;
    }>;
  };
  // Define the structure for the card data used in the UI
  type Card = { id: string; title: string; src: string; alt: string; instructions?: string };

  // Map the API response to the card format
  const mapFn = (data: SpoonacularRandomResult): Card[] =>
    Array.isArray(data.recipes)
      ? data.recipes.map((item) => ({
          id: String(item.id),
          title: item.title,
          src: item.image,
          alt: item.title,
          instructions: item.instructions,
        }))
      : [];

  // Use the custom hook to fetch recipes
  const { loading, error, data, fetchData, setError } = useFetchRecipes<SpoonacularRandomResult, Card[]>(url, mapFn);

  // Fetch random recipes on mount if not already loaded
  React.useEffect(() => {
    if (cards.length === 0) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, cards.length]);

  // Update Redux store when new data is fetched
  React.useEffect(() => {
    if (data && data.length > 0) {
      dispatch(setRandomCards(data));
    }
  }, [data, dispatch]);

  // Show loading spinner while fetching data
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-lime-700 mb-4"></div>
        <p className="text-lime-700 text-lg">Loading random recipes...</p>
      </div>
    );
  }
  // Show error message and retry button if fetch fails
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh] text-center">
        <p className="text-red-700 text-xl font-bold mb-2">{error}</p>
        <button
          className="mt-2 px-4 py-2 bg-lime-700 text-white rounded-3xl hover:bg-lime-800 transition"
          onClick={() => {
            dispatch(setRandomCards([]));
            setError(null);
            fetchData();
          }}
        >
          Retry
        </button>
      </div>
    );
  }

  // Render the grid of random recipe cards
  return (
    <>
      <h2 className='font-playwrite text-lime-700 text-4xl font-bold text-center mt-12'>Get Inspired</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1300px] mx-auto px-8 sm:px-20 pt-16 pb-24">
        {cards.map((cardData, index) => (
          <Card
            key={cardData.id || index}
            id={cardData.id}
            src={cardData.src}
            alt={cardData.alt || cardData.title}
            title={cardData.title}
          />
        ))}
      </div>
    </>
  );
}

export default GridRandomCards;
