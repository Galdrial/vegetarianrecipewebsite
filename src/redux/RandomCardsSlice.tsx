// Redux slice for managing random recipe cards
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
const randomCardsSlice = createSlice({
  name: 'randomCards',
  initialState,
  reducers: {
    // Set the array of random cards
    setRandomCards(state, action) {
      state.cards = action.payload;
    },
  },
});

// Selector to get random cards from the state
function cardSelector(state: RootState) {
  return state.randomCards.cards;
}

// Export actions and reducer
export const { setRandomCards } = randomCardsSlice.actions;
export { cardSelector };
export default randomCardsSlice.reducer;