import { pokemonApi } from './../api/pokesliceapi';
import { stackOverflowApi } from '../api/stackoverflowApiSlice';
import { rootReducer } from './rootReducer';
import { configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';

type RootState = ReturnType<typeof rootReducer>;

const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(stackOverflowApi.middleware, pokemonApi.middleware),
    preloadedState,
  });
};

type AppStore = ReturnType<typeof setupStore>;
type AppDispatch = AppStore['dispatch'];

export { setupStore, AppStore, RootState, AppDispatch };