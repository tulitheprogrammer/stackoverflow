import React from 'react';
import { Title, useTheme } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

import { ThemeSwitch } from '../common/theme/ThemeToggle';
import { i18n } from '../common/i18n';
import { UserSearchForm } from '../components/user/UserSearchForm';
import { UserCard } from '../components/user/UserCard';
import { Questions } from '../components/user/Questions';

export const WelcomePage = () => {
  const { colors } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ThemeSwitch />
      <Title>{i18n.t('subject')}</Title>
      <UserSearchForm />
      <UserCard/>
      <Questions/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    justifyContent: 'space-around',
  },
});
