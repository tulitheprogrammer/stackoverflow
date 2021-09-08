import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Card, Paragraph, useTheme } from 'react-native-paper';

export interface UserCardProps { }

export const UserCard: FC<UserCardProps> = () => {
  const { colors } = useTheme();

  return (<Card style={[styles.container, { color: colors.text, backgroundColor: colors.background }]}>
    <Card.Content style={styles.content}>
      <Avatar.Image source={require('../assets/avatar.jpeg')} />
      <Paragraph style={styles.info}>
        <Card.Title title={'name'} />
        <Card.Title title="Card Title" />
        <Card.Title title="Card Title" />
      </Paragraph>
    </Card.Content>
  </Card>);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },
  info: {
    // flex: 1,
    width: '50%',
    flexDirection: 'row',
    alignContent: 'space-between',
  },
});
