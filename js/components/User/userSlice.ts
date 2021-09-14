import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../common/state-management';

interface UserState {
  userId?: string;
}

const initialState: UserState = {  };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserId(state, { payload}: PayloadAction<string>) {
      state.userId = payload;
    },
  },
});

const userReducer = userSlice.reducer;

const userSelector = ({ userReducer }: RootState) => userReducer;
const selectUserId = ({  userReducer: { userId }}: RootState) => userId;

export { userSelector, selectUserId, userReducer, UserState };
export const { setUserId } = userSlice.actions;
