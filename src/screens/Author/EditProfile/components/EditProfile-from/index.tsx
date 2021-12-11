import React from 'react';
// TYPES
import {initialFormValues} from '@Types/Form';
import {Author} from '@GraphQL/query';
// FORM
import {
  AppForm,
  AppInputField,
  AppPickerField,
  AppSubmitButton,
} from '@Components/Form';
import {editAuthorValidationSchema as validationSchema} from '@Utils/validationSchema';
// RENDER
import {View} from 'react-native';
import {COLORS} from '@Styles/colors';
import {colors} from '@Assets/data';

// import styles from './styles';

interface EditProfileFromProps {
  handleSubmit(value: initialFormValues): void;
  loading: boolean;
  author: Author;
}

export const EditProfileFrom: React.FC<EditProfileFromProps> = ({
  handleSubmit,
  loading,
  author,
}) => {
  const {name, color, email} = author;
  const userFavoriteColor = colors.find(c => c.color === color.hex);
  return (
    <View>
      <AppForm
        onSubmit={handleSubmit}
        initialValues={{
          email: email || '',
          name: name || '',
          color: userFavoriteColor || null,
        }}
        validationSchema={validationSchema}>
        <AppInputField name="email" placeholder="Email" />
        <AppInputField name="name" placeholder="Name" />
        <AppPickerField
          name="color"
          items={colors}
          placeholder="Favorite Color"
          inverted={true}
        />
        <AppSubmitButton
          title="Submit"
          loading={loading}
          color={COLORS.secondary}
        />
      </AppForm>
    </View>
  );
};
