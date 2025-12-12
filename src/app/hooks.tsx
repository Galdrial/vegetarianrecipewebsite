// Custom hooks for using Redux in the app with TypeScript support
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../redux/store.tsx';

// Typed version of useDispatch for dispatching Redux actions
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

// Typed version of useSelector for selecting state from the Redux store
export const useAppSelector = useSelector.withTypes<RootState>();