import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {IF, AppButton, AnimatableView} from '@Commons/index';
import Icon from 'react-native-vector-icons/AntDesign';

import {Image as ImagePickerProps} from 'react-native-image-crop-picker';

import {COLORS} from '@Styles/colors';
import styles from './styles';

export interface UploadImageProps {
  handlePickImage(): void;
  image?: ImagePickerProps;
  handleProcessed(): void;
  loading: boolean;
}

export const UploadImage: React.FC<UploadImageProps> = ({
  image,
  handlePickImage,
  loading,
  handleProcessed,
}) => {
  return (
    <AnimatableView style={styles.container}>
      <IF condition={Boolean(image)}>
        <Image source={{uri: image?.path}} style={styles.placeholder} />
      </IF>
      <IF condition={!image}>
        <TouchableOpacity style={styles.placeholder} onPress={handlePickImage}>
          <Icon name="pluscircle" color={COLORS.white} size={100} />
        </TouchableOpacity>
      </IF>
      {/* <Image source={{uri: ''}} style={styles.placeholder} /> */}
      <View style={styles.buttonContainer}>
        <AppButton
          title="processed"
          onPress={handleProcessed}
          color={COLORS.secondary}
          loading={loading}
        />
      </View>
    </AnimatableView>
  );
};
