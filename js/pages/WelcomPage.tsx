import React from 'react';
import { Title, useTheme } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

import { ThemeSwitch } from '../common/theme/ThemeToggle';
import { i18n } from '../common/i18n';
import { SearchForm } from '../components/SearchForm';
import { UserCard } from '../components/UserCard';
import { Questions } from '../components/Questions';

export const WelcomePage = () => {
  const { colors } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ThemeSwitch />
      <Title>{i18n.t('subject')}</Title>
      <SearchForm />
      <UserCard/>
      <Questions/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
