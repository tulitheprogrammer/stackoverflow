import React from 'react';
import { StyleSheet, View , Text} from 'react-native';
import { Title, useTheme } from 'react-native-paper';
import { ThemeSwitch } from '../common/theme/ThemeToggle';
import { i18n } from '../common/i18n';
import { UserSearchForm } from '../components/user/UserSearchForm';
import { UserCard } from '../components/user/UserCard';
import { UserQuestionsList } from '../components/user/UserQuestionsList';
import { useSelector } from 'react-redux';
import { selectUserId } from '../components/user/userSlice';

export const WelcomePage = () => {
  const { colors } = useTheme();

  const userId = useSelector(selectUserId);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ThemeSwitch />
      <Title>{i18n.t('subject')}</Title>
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
    padding: 40,
    justifyContent: 'space-around',
  },
});
