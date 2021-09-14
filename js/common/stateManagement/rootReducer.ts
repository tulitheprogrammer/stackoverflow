import { userApi } from '../api/userApiSlice';
import { themeReducer } from '@theme';
import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from '@components/User';

export const rootReducer = combineReducers({
  [userApi.reducerPath]: userApi.reducer,
  themeReducer,
  userReducer,
});
