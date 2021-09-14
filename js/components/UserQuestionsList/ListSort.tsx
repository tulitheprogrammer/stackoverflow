import React, { FC, useState } from 'react';
import { ToggleButton, Title } from 'react-native-paper';

const DEFAULT_SORT_BY = '';

export const ListSortBar: FC = () => {
  const [value, setValue] = useState('views');
  const [sortBy, setSortBy] = useState(DEFAULT_SORT_BY);

  return (
    <ToggleButton.Row onValueChange={(value) => setValue(value)} value={value}>
      <Title>Questions</Title>
      <ToggleButton icon="eye" value="views" />
      <ToggleButton icon="eye" value="right">
        Answers
      </ToggleButton>
    </ToggleButton.Row>
  );
};
