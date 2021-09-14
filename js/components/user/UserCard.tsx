import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Card, useTheme, List, ActivityIndicator } from 'react-native-paper';
import { useGetUserByIdQuery } from '../../common/api';
import { BaseUserProps } from './user.types';

export const UserCard: FC<BaseUserProps> = ({ userId }) => {
  const { colors } = useTheme();

  const { data, isError, isLoading, isFetching } = useGetUserByIdQuery(userId);
  const { avatar: uri, name = 'None', reputation = 0, acceptRate = 'Missing data' } = data ?? {};

  return (
    <Card style={styles.container}>
      {data ? (
        <Card.Content style={styles.content}>
          <Avatar.Image source={{ uri }} style={styles.avatar} />
          <List.Section style={styles.info}>
            <List.Item title="Name:" description={name} />
            <List.Item title="Reputation" description={reputation} />
            <List.Item title="Accept Rate" description={acceptRate} />
          </List.Section>
        </Card.Content>
      ) : (
        <>
          <ActivityIndicator animating={isLoading} style={styles.container} />
          {!!isError && <Card.Title title={'Oh no, there was an error'} />}
        </>
      )}
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  avatar: {
    alignSelf: 'center',
  },
  info: {
    flex: 1,
  },
});
