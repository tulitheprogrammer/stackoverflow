import React, { FC } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Card, Paragraph, useTheme } from 'react-native-paper';
import {
  useGetUserByIdQuery,
} from '../../common/api';

export interface QuestionsProps {
  userId?: string;
}

export const Questions: FC<QuestionsProps> = ({ userId = '16854570' }) => {
  const { colors } = useTheme();

  const { data, error, isFetching } = useGetUserByIdQuery(userId);

  console.log('data', JSON.stringify(data, null, 2));

  return (
    <Card style={[styles.container, { color: colors.text, backgroundColor: colors.background }]}>
      <Card.Title title="Questions" />
      {/* <Text>{isFetching1 ? 'isFetching......' : JSON.stringify(error1, null, 2)}</Text> */}
      <Text>{isFetching ? 'Re-Fetching......' : '***' + JSON.stringify(data, null, 2)}</Text>
      <Card.Content style={styles.content}>
        <Paragraph style={styles.info}>
          <Card.Title title="Card Title" />
        </Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    alignContent: 'space-around',
  },
  info: {
    flexWrap: 'wrap',
    // flex: 1,
    flexDirection: 'column',
  },
});
