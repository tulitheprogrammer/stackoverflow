import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../state-management/store';

interface ThemeState {
  isDarkMode: boolean;
}

const initialState: ThemeState = { isDarkMode: false };

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchToDarkMode(state) {
      state.isDarkMode = true;
    },
    switchToLightMode(state) {
      state.isDarkMode = true;
    },
    switchThemeMode(state) {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

const themeReducer = themeSlice.reducer;

const themeSelector = (state: RootState) => state.themeReducer;
const selectIsDarkMode = (state: RootState) => state.themeReducer.isDarkMode;

export { themeSelector, selectIsDarkMode, themeReducer };
export const { switchToDarkMode, switchToLightMode, switchThemeMode } =
  themeSlice.actions;
