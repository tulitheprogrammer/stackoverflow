import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Headline, useTheme } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { ThemeSwitch } from '@components/ThemeToggle';
import { i18n } from '../common/i18n';
import { UserSearchForm } from '@components/UserSearchForm';
import { UserCard } from '@components/User';
import { UserQuestionsList } from '@components/UserQuestionsList';
import { selectUserId } from '@components/User';

export const WelcomePage = () => {
  const { colors } = useTheme();

  const userId = useSelector(selectUserId);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ThemeSwitch />
      <Headline style={styles.headline}>{i18n.t('subject')}</Headline>
      <UserSearchForm />
      {!!userId && (
        <>
          <UserCard userId={userId} />
          <UserQuestionsList userId={userId} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headline: {
    padding: 10,
  },
});
