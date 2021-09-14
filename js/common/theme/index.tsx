import { DarkTheme, DefaultTheme, Provider } from 'react-native-paper';
import React, { FC } from 'react';
import { selectIsDarkMode } from './themeSlice';
import { useSelector } from 'react-redux';

export const PaperProvider: FC = ({ children }) => {
  const isDarkMode = useSelector(selectIsDarkMode);

  return <Provider theme={isDarkMode ? DarkTheme : DefaultTheme}>{children}</Provider>;
}

export * from './themeSlice';