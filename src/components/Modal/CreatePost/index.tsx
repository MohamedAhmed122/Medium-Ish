import {ModalType} from '@Types/Modal';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  setModalType(type: ModalType): void;
}

export const CreatePost: React.FC<Props> = ({setModalType}) => {
  return (
    <View>
      <Text>Text</Text>
    </View>
  );
};

// const styles = StyleSheet.create({});
