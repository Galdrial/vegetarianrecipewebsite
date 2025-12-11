import { configureStore } from '@reduxjs/toolkit';
import randomCardsReducer from './RandomCardsSlice.tsx';
import recepiDetailReducer from './RecepiDetailSlice.tsx';
import resultsCardsReducer from './ResultsCardsSlice.tsx';

export const store = configureStore({
  reducer: {
    randomCards: randomCardsReducer,
    recepiDetail: recepiDetailReducer,
    resultsCards: resultsCardsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

// Tipo globale dello stato Redux
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
