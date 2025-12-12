// Redux slice for managing detailed recipe information
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';

// Type definition for a detailed recipe
interface RecipeDetail {
  id: string;
  title: string;
  src: string;
  alt?: string;
  instructions?: string;
}

// Initial state: an array of recipe details
const initialState = {
  cards: [] as RecipeDetail[],
};

// Create the slice with reducers
const recipeDetailSlice = createSlice({
  name: 'recipeDetail',
  initialState,
  reducers: {
    // Set the array of recipe details
    setRecipeDetails(state, action) {
      state.cards = action.payload;
    },
  },
});

// Selector to get recipe details from the state
function cardSelector(state: RootState) {
  return state.recipeDetail.cards;
}

// Export actions and reducer
export const { setRecipeDetails } = recipeDetailSlice.actions;
export { cardSelector };
export default recipeDetailSlice.reducer;