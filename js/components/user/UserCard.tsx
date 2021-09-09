import { useGetUserByIdQuery } from 'common/api';
import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Card, useTheme, List } from 'react-native-paper';

export interface RawUserInfo {
  user_id: string;
  display_name: string;
  profile_image: string;
  reputation: number;
}

export interface UserInfo {
  userId: string;
  name: string;
  avatar: string;
  reputation: number;
}

export const UserCard: FC<UserInfo> = ({ name, avatar, reputation }) => {
  const { colors } = useTheme();

  return (
    <Card style={[styles.container, { color: colors.text, backgroundColor: colors.background }]}>
      <Card.Content style={styles.content}>
        <Avatar.Image source={{ uri: avatar }} />
        <List.Section>
          <List.Item
            title={name}
            description="Item description"
            left={() => <List.Icon icon="folder" />}
          />
          <List.Subheader>Some title</List.Subheader>
          <List.Item title="First Item" left={() => <List.Icon icon="folder" />} />
          <List.Item title="Second Item" left={() => <List.Icon color="#000" icon="folder" />} />
        </List.Section>
      </Card.Content>
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
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  info: {
    // flex: 1,
    width: '50%',
    flexDirection: 'row',
    alignContent: 'space-between',
  },
});
