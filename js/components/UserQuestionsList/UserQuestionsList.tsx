import React, { FC, useState } from 'react';
import { SafeAreaView, StyleSheet, FlatList, FlatListProps, Text } from 'react-native';
import {
  List,
  Dialog,
  Portal,
  Divider,
  Paragraph,
  ActivityIndicator,
  Surface
} from 'react-native-paper';
import { useGetQuestionsByUserIdQuery } from '../../common/api';
import { BaseUserProps } from '../User';
import { Question } from './userQuestionsList.types';

import { decode } from 'html-entities';
import { ListSortBar } from './ListSort';

export interface DialogInfo {
  title: string;
  sub: string;
}

export const UserQuestionsList: FC<BaseUserProps> = ({ userId }) => {
  const [visible, setVisible] = useState(false);
  const [dialogInfo, setDialogInfo] = useState<DialogInfo>();

  const { data, isLoading } = useGetQuestionsByUserIdQuery(userId);
  const hideDialog = () => setVisible(false);
  const showDialog = (info: DialogInfo) => {
    setDialogInfo(info);
    setVisible(true);
  };

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
        right={() => <List.Icon icon="arrow-right" />}
      />
    );
  };

  const flatListProps: FlatListProps<Question> = {
    ItemSeparatorComponent: Divider,
    data: data ?? [],
    renderItem,
    keyExtractor: ({ question_id = '' }) => String(question_id),
  };

  return data ? (
    <>
      <SafeAreaView style={styles.container}>
        <Surface>
          {/* <ListSortBar /> */}
          <FlatList {...flatListProps} />
        </Surface>
      </SafeAreaView>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>{dialogInfo?.title}</Dialog.Title>
          <Dialog.Content>
            <Paragraph>{dialogInfo?.sub} answer/s</Paragraph>
          </Dialog.Content>
        </Dialog>
      </Portal>
    </>
  ) : (
    <ActivityIndicator animating={isLoading} style={styles.container} />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
