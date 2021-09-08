import React, { FC } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Card, Paragraph, useTheme } from 'react-native-paper';
import { useGetUserByIdQuery, useGetPokemonByNameQuery } from '../common/api';

export interface QuestionsProps {
  userId?: string;
}

export const Questions: FC<QuestionsProps> = ({ userId = '16854570' }) => {
  const { colors } = useTheme();

  const  { data1, error1, refetch1, isFetching1 } = useGetUserByIdQuery(userId);

  console.log('data', JSON.stringify(data1, null, 2));
  console.log('error', error1);
  const { data2, error2, refetch2, isFetching2 } = useGetPokemonByNameQuery(userId);
  console.log('data', JSON.stringify(data2, null, 2));
  console.log('error', error2);

  return (
    <Card style={[styles.container, { color: colors.text, backgroundColor: colors.background }]}>
      <Card.Title title="Questions" />
      <Text>{isFetching1 ? 'isFetching......' : JSON.stringify(error1, null, 2)}</Text>
      <Text>{isFetching2 ? 'isFetching......' : JSON.stringify(error2, null, 2)}</Text>
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
