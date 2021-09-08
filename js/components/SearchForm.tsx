import React from 'react';
import { TextInput, View } from 'react-native';
import { Formik } from 'formik';
import { withTheme, Button } from 'react-native-paper';

export const SearchForm = withTheme(({ theme: { colors, dark } }) => (
  <Formik initialValues={{ userID: '' }} onSubmit={(values) => console.log(values)}>
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View>
        <TextInput
          style={{ color: colors.text }}
          onChangeText={handleChange('text')}
          onBlur={handleBlur('text')}
          value={values.userID}
        />
        <Button dark={dark} onPress={handleSubmit}>
          Submit
        </Button>
      </View>
    )}
  </Formik>
));
