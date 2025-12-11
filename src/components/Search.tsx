import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setResultsCards } from '../redux/ResultsCardsSlice';

function Search() {
  const [query, setQuery] = React.useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!query.trim()) return;
    try {
      const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
      const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=8&diet=vegetarian&query=${encodeURIComponent(query)}`);
      const cards = response.data.results.map((item: { id: number; title: string; image: string; }) => ({
        id: String(item.id),
        title: item.title,
        src: item.image,
        alt: item.title,
      }));
      dispatch(setResultsCards(cards));
      navigate('/search');
    } catch (error) {
      console.error('Error searching recipes:', error);
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (  
    <div className="flex-1 min-w-[200px] mx-4 order-3 sm:order-none w-full">
      <div className="relative w-full">
        <input
          type="text"
          className="text-gray-700 rounded-full px-4 py-2 w-full pr-10 bg-white border border-gray-300"
          placeholder="Search..."
          value={query}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
        />
        <button
          className="absolute bg-transparent inset-y-0 right-1 flex items-center cursor-pointer text-gray-500"
          onClick={handleSearch}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Search;