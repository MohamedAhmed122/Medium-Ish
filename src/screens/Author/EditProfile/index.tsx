import React from 'react';

import {Screen} from '@Commons/index';
import {RouteProp} from '@react-navigation/native';
import {
  AuthorParamList,
  AuthorParams,
} from '@Navigation/author-stack/interface';
import {EditProfileFrom, EditProfileImage} from './components';
import {EditProfileValue, initialFormValues} from '@Types/Form';
import {Header} from '@Components/Header';
import {StackNavigationProp} from '@react-navigation/stack';

interface EditProfileProps {
  route: RouteProp<AuthorParamList, AuthorParams.EditProfile>;
  navigation: StackNavigationProp<AuthorParamList, AuthorParams.EditProfile>;
}

export const EditProfile: React.FC<EditProfileProps> = ({
  route,
  navigation,
}) => {
  const {author} = route.params;

  const handleSubmit = (values: initialFormValues) => {
    const newValue = values as EditProfileValue;
    console.log(newValue);
  };

  const onNavigateToEditImage = () =>
    navigation.navigate(AuthorParams.EditImage);

  return (
    <Screen>
      <Header title="Edit Profile" handleGoBack={navigation.goBack} />
      <EditProfileImage
        author={author}
        handleNavigation={onNavigateToEditImage}
      />
      <EditProfileFrom
        handleSubmit={handleSubmit}
        loading={false}
        author={author}
      />
    </Screen>
  );
};
