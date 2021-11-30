import React from 'react';
import {Screen} from '@Commons/Screen';
import {Header} from '@Components/Header';
import {FromBio} from './FromBio';
import {COLORS} from '@Styles/colors';

// import styles from './styles'

interface UserBioScreenProps {}

export const UserBioScreen: React.FC<UserBioScreenProps> = () => {
  return (
    <Screen>
      <Header title="Bio" handleGoBack={() => {}} color={COLORS.primary} />
      <FromBio />
    </Screen>
  );
};
