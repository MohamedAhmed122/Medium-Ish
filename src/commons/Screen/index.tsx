import React from 'react';
import {ScrollView, StyleProp, ViewStyle, SafeAreaView} from 'react-native';

import styles from './styles';

interface ScreenProps {
  scroll?: boolean;
  scrollContainerStyle?: StyleProp<ViewStyle>;
}
//  Authorization
export const Screen: React.FC<ScreenProps> = ({
  scroll = false,
  scrollContainerStyle,
  children,
}) => {
  if (scroll) {
    return (
      <ScrollView style={[styles.scrollScreen, scrollContainerStyle]}>
        <SafeAreaView style={styles.screen} />
        {children}
      </ScrollView>
    );
  } else {
    console.log('Safe View');
    return (
      <SafeAreaView style={[styles.screen, scrollContainerStyle]}>
        {children}
      </SafeAreaView>
    );
  }
};
