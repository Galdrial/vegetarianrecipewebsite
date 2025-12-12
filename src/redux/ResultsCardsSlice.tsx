// Redux slice for managing search result recipe cards
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';

// Type definition for a recipe card
interface CardData {
  id: string;
  title: string;
  src: string;
  alt?: string;
  instructions?: string;
}

// Initial state: an array of cards
const initialState = {
  cards: [] as CardData[],
};

// Create the slice with reducers
const resultsCardsSlice = createSlice({
  name: 'resultsCards',
  initialState,
  reducers: {
    // Set the array of result cards
    setResultsCards(state, action) {
      state.cards = action.payload;
    },
    // Clear all result cards
    clearResultsCards(state) {
      state.cards = [];
    },
  },
});

// Selector to get result cards from the state
function resultsSelector(state: RootState) {
  return state.resultsCards.cards;
}

// Export actions and reducer
export const { setResultsCards, clearResultsCards } = resultsCardsSlice.actions;
export { resultsSelector };
export default resultsCardsSlice.reducer;