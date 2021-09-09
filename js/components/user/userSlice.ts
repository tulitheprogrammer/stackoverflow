import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../common/state-management/store';
import { UserInfo } from './UserCard';

interface UserQuestions { }

interface UserState {
  userInfo?: UserInfo;
  userQuestions?: UserQuestions[];
}

const initialState: UserState = {  };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo(state) {
      // state.userInfo =
    },
  },
});

const userReducer = userSlice.reducer;

const userSelector = ({ userReducer }: RootState) => userReducer;
const selectUserInfo = ({  userReducer: {userInfo}}: RootState) => userInfo;

export { userSelector, selectUserInfo, userReducer, UserInfo, UserState, UserQuestions };
export const { setUserInfo } = userSlice.actions;
