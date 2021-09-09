import React from 'react';
import { Formik } from 'formik';
import { TextInput, Button, useTheme } from 'react-native-paper';

interface FormFields {
  userId: string;
}

export const UserSearchForm = () => {
  const { colors, dark } = useTheme();

  const fetchUser = ({ userId }: FormFields) => {};

  return (
    <Formik initialValues={{ userId: '' }} onSubmit={fetchUser}>
      {({ handleChange, handleSubmit, values: { userId}, isSubmitting }) => (
        <>
          <TextInput
            mode="outlined"
            label="User Id"
            placeholder="Please enter user id..."
            clearButtonMode="while-editing"
            onChangeText={handleChange('userId')}
            value={ userId}
          />
          <Button dark={dark} disabled={isSubmitting} onPress={handleSubmit}>
            Submit
          </Button>
        </>
      )}
    </Formik>
  );
};
