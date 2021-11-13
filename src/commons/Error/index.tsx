import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';

interface Props {
  message?: string;
}

export const Error: React.FC<Props> = ({
  message = 'Oops, Error receiving the data from the Server ',
}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('@Assets/images/error.png')}
        style={styles.errorImage}
        resizeMode="contain"
      />
      <Text style={styles.mainText}>Sorry...</Text>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};
