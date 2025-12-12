import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';


interface RecipeDetail {
  id: string;
  title: string;
  src: string;
  alt?: string;
  instructions?: string;
}

const initialState = {
  cards: [] as RecipeDetail[],
};

const recipeDetailSlice= createSlice({
  name: 'recipeDetail',
  initialState,
  reducers: {
    setRecipeDetails(state, action) {
      state.cards = action.payload;
    },
  },
});

function cardSelector(state: RootState) {
      return state.recipeDetail.cards;
    };

export const { setRecipeDetails } = recipeDetailSlice.actions;
export { cardSelector };
export default recipeDetailSlice.reducer;