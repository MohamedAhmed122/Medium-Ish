import React from 'react';
import {SafeAreaView, ScrollView, StyleProp, ViewStyle} from 'react-native';
import styles from './styles';

interface ScreenProps {
  scroll?: boolean;
  scrollContainerStyle?: StyleProp<ViewStyle>;
}
//  Authorization
export const Screen: React.FC<ScreenProps> = ({
  scroll,
  scrollContainerStyle,
  children,
}) => {
  if (scroll) {
    return (
      <ScrollView style={[styles.screen, scrollContainerStyle]}>
        <SafeAreaView style={styles.scrollScreen} />
        {children}
      </ScrollView>
    );
  } else {
    return (
      <SafeAreaView style={[styles.scrollScreen, scrollContainerStyle]}>
        {children}
      </SafeAreaView>
    );
  }
};
