import { DefaultTheme, Provider } from 'react-native-paper';
import React, { FC } from 'react';
import { produce } from 'immer';
import { selectIsDarkMode } from './themeSlice';
import { useSelector } from 'react-redux';

export const lightTheme = produce(DefaultTheme, (draftTheme) => {
  draftTheme.colors.text = '#000000';
  draftTheme.colors.background = '#FFFFFF';
});

export const darkTheme = produce(DefaultTheme, (draftTheme) => {
  draftTheme.colors.text = '#FFFFFF';
  draftTheme.colors.background = '#000000';
});

export const PaperProvider: FC = ({ children }) => {
  const isDarkMode = useSelector(selectIsDarkMode);

  return <Provider theme={isDarkMode? darkTheme: lightTheme}>{children}</Provider>;
}