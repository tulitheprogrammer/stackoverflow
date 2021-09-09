import { stackoverflowApi } from '../api/stackoverflowApiSlice';
import { themeReducer } from '../theme/themeSlice';
import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from '../../components/user/userSlice';

export const rootReducer = combineReducers({
  [stackoverflowApi.reducerPath]: stackoverflowApi.reducer,
  themeReducer,
  userReducer,
});
