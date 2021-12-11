import React from 'react';

import {Screen, AppText} from '@Commons/index';
import {RouteProp} from '@react-navigation/native';
import {
  AuthorParamList,
  AuthorParams,
} from '@Navigation/author-stack/interface';

interface EditProfileProps {
  route: RouteProp<AuthorParamList, AuthorParams.EditProfile>;
}

export const EditProfile: React.FC<EditProfileProps> = ({route}) => {
  const {author} = route.params;
  console.log(author, 'route');
  return (
    <Screen>
      <AppText>EditProfile</AppText>
    </Screen>
  );
};
