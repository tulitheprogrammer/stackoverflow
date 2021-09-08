import { stackOverflowApi } from '../api/stackoverflowApiSlice';
import { themeReducer } from '../theme/themeSlice';
import { combineReducers } from '@reduxjs/toolkit';
import { pokemonApi } from '../api/pokesliceapi';

export const rootReducer = combineReducers({
  [stackOverflowApi.reducerPath]: stackOverflowApi.reducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
  themeReducer,
});
