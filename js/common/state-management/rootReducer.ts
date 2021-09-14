import { userApi } from '../api/userApiSlice';
import { themeReducer } from '../theme/themeSlice';
import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from '../../components/user/userSlice';

export const rootReducer = combineReducers({
  [userApi.reducerPath]: userApi.reducer,
  themeReducer,
  userReducer,
});
