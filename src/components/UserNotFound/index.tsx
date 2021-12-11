import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AppText} from '@Commons/AppText';
import {AppModal} from '@Components/Modal';
import {useToggleButton} from '@Hooks/useToggle';
import {AppButton} from '@Commons/AppButton';

export default function UserNotFound() {
  const {value, toggleButton} = useToggleButton(true);
  return (
    <View>
      <AppText style={styles.text}>You Must Sign In to Processed </AppText>
      <AppButton title="Sign In" onPress={toggleButton} />
      <AppModal isVisible={value} handleCloseModal={toggleButton} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    marginTop: 100,
    fontSize: 20,
    textAlign: 'center',
  },
});
