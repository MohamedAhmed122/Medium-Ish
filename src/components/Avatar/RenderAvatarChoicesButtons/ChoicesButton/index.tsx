import React from 'react';
import {View} from 'react-native';
import {AppText} from '@Commons/AppText';
import {COLORS} from '@Styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SvgUri} from 'react-native-svg';
import styles from './styles';
import {getAvatarUri} from '@Utils/utils';

interface Props {
  icon?: boolean;
  title: string;
}

export const ChoicesButton: React.FC<Props> = ({icon, title}) => {
  return (
    <>
      <View style={styles.avatar}>
        {icon ? (
          <Icon name="camera" color={COLORS.darkGray} size={20} />
        ) : (
          <SvgUri
            width={40}
            height={50}
            uri={getAvatarUri('personas', 8)}
            style={styles.svg}
          />
        )}
      </View>
      <View style={styles.container}>
        <AppText fontFamily="Roboto-Bold" style={styles.text}>
          {title}
        </AppText>
      </View>
    </>
  );
};
