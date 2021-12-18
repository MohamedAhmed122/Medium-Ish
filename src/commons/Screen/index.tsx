import React from 'react';
import {ScrollView, StyleProp, ViewStyle} from 'react-native';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';

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
    console.log('Scroll View');
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
