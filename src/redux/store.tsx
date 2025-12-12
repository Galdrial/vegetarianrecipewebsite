// Redux store configuration for the app
import { configureStore } from '@reduxjs/toolkit';
import randomCardsReducer from './RandomCardsSlice.tsx';
import recipeDetailReducer from './RecipeDetailSlice.tsx';
import resultsCardsReducer from './ResultsCardsSlice.tsx';

// Create the Redux store with all slices
export const store = configureStore({
  reducer: {
    randomCards: randomCardsReducer,      // Handles random recipe cards
    recipeDetail: recipeDetailReducer,    // Handles detailed recipe info
    resultsCards: resultsCardsReducer,    // Handles search result cards
  },
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development
});

// Global type for Redux state
export type RootState = ReturnType<typeof store.getState>;
// Type for Redux dispatch function
export type AppDispatch = typeof store.dispatch;
