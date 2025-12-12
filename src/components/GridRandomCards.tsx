import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cardSelector, setRandomCards } from '../redux/RandomCardsSlice';
import Card from './Card';


function GridRandomCards() {
  const cards = useSelector(cardSelector);
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (cards.length === 0) {
      async function fetchRandomCards() {
        setLoading(true);
        setError(null);
        try {
          const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
          const response = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=8&include-tags=vegetarian`);
          interface SpoonacularRecipe {
            id: number;
            title: string;
            image: string;
            instructions?: string;
          }
          const cards = response.data.recipes.map((item: SpoonacularRecipe) => ({
            id: String(item.id),
            title: item.title,
            src: item.image,
            alt: item.title,
            instructions: item.instructions,
          }));
          dispatch(setRandomCards(cards));
        } catch {
          setError('Unable to load random recipes. Please try again later.');
        } finally {
          setLoading(false);
        }
      }
      fetchRandomCards();
    }
  }, [dispatch, cards.length]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-lime-700 mb-4"></div>
        <p className="text-lime-700 text-lg">Loading random recipes...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh] text-center">
        <p className="text-red-700 text-xl font-bold mb-2">{error}</p>
        <button
          className="mt-2 px-4 py-2 bg-lime-700 text-white rounded-3xl hover:bg-lime-800 transition"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    );
  }

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
