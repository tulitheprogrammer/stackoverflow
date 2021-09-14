import React, { FC, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList, FlatListProps } from 'react-native';
import { List, useTheme, Dialog, Portal, Divider, Paragraph } from 'react-native-paper';
import { useGetQuestionsByUserIdQuery } from '../../common/api';
import { BaseUserProps, Question } from './user.types';
import { decode } from 'html-entities';

const DEFAULT_SORT_BY = '';

export interface ModelInfo {
  title: string;
  sub: string;
}

export const UserQuestionsList: FC<BaseUserProps> = ({ userId }) => {
  const [visible, setVisible] = useState(false);
  const [modalInfo, setModalInfo] = useState<ModelInfo>();
  const [sortBy, setSortBy] = useState(DEFAULT_SORT_BY);

  const { data } = useGetQuestionsByUserIdQuery(userId);
  const hideDialog = () => setVisible(false);
  const showDialog = (info: ModelInfo) => {
    setModalInfo(info);
    setVisible(true);
  };

  const ListHeaderComponent = () => {};

  const renderItem = ({
    item: { title: rawTitle, tags, question_id, answer_count = 0 },
  }: {
    item: Question;
  }) => {
    const title = decode(rawTitle);
    const description = tags.join(',');

    return (
      <List.Item
        key={question_id}
        title={title}
        onPress={() => showDialog({ title, sub: String(answer_count) })}
        description={description}
        right={(props) => <List.Icon icon="arrow-right" />}
      />
    );
  };

  const flatListProps: FlatListProps<Question> = {
    // ListHeaderComponent,
    ItemSeparatorComponent: Divider,
    data: data ?? [],
    renderItem,
    keyExtractor: ({ question_id = '' }) => String(question_id),
  };

  return data ? (
    <>
      <SafeAreaView style={styles.container}>
        <FlatList {...flatListProps} />
      </SafeAreaView>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog} style={styles.dialog}>
          <Dialog.Title style={styles.dialogText}>{modalInfo?.title}</Dialog.Title>
          <Dialog.Content>
            <Paragraph style={styles.dialogText}>{modalInfo?.sub} answer/s</Paragraph>
          </Dialog.Content>
        </Dialog>
      </Portal>
    </>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dialog: {
    backgroundColor: '#000',
  },
  dialogText: {
    color: '#fff',
  },
});
