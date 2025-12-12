import { configureStore } from '@reduxjs/toolkit';
import randomCardsReducer from './RandomCardsSlice.tsx';
import recipeDetailReducer from './RecipeDetailSlice.tsx';
import resultsCardsReducer from './ResultsCardsSlice.tsx';

export const store = configureStore({
  reducer: {
    randomCards: randomCardsReducer,
    recipeDetail: recipeDetailReducer,
    resultsCards: resultsCardsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

// Global type for Redux state
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
