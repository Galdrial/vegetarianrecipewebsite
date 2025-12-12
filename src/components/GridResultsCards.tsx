import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resultsSelector, setResultsCards } from '../redux/ResultsCardsSlice';
import Card from './Card';

function GridResultsCards() {
  const cards = useSelector(resultsSelector);
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (cards.length === 0) {
      async function fetchResultsCards() {
        setLoading(true);
        setError(null);
        try {
          const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
          const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=8&diet=vegetarian`);
          interface SpoonacularRecipe {
            id: number;
            title: string;
            image: string;
            instructions?: string;
          }
          const cards = response.data.results.map((item: SpoonacularRecipe) => ({
            id: String(item.id),
            title: item.title,
            src: item.image,
            alt: item.title,
          }));
          dispatch(setResultsCards(cards));
        } catch {
          setError('Unable to load search results. Please try again later.');
        } finally {
          setLoading(false);
        }
      }
      fetchResultsCards();
    }
  }, [cards.length, dispatch]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-lime-700 mb-4"></div>
        <p className="text-lime-700 text-lg">Loading search results...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh] text-center">
        <p className="text-red-700 text-xl font-bold mb-2">{error}</p>
        <button
          className="mt-10 px-4 py-2 bg-lime-700 text-white rounded-3xl hover:bg-lime-800 transition"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    );
  }

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