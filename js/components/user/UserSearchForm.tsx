import React, { FC } from 'react';
import { Formik } from 'formik';
import { TextInput, Button, useTheme, Searchbar } from 'react-native-paper';
import { setUserId } from './userSlice';
import { StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { i18n } from '../../common/i18n';
import { lightTheme } from '../../common/theme';
export interface FormFields {
  userId: string;
}

const DEFAULT_USER_ID = '1264804';

export const UserSearchForm: FC = () => {
  const dispatch = useDispatch();
  const placeHolder = i18n.t('searchPlaceHolder');

  const updateUserId = ({ userId }: FormFields) => void dispatch(setUserId(userId));

  return (
    <Formik initialValues={{ userId: DEFAULT_USER_ID }} onSubmit={updateUserId}>
      {({ handleChange, handleSubmit, values: { userId } }) => (
        <>
          <Searchbar
            theme={lightTheme}
            placeholder={placeHolder}
            onChangeText={handleChange('userId')}
            value={userId}
            onIconPress={handleSubmit}
          />
        </>
      )}
    </Formik>
  );
};
