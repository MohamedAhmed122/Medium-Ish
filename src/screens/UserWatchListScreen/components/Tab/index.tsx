import React from 'react';
import {View, TouchableOpacity} from 'react-native';

import {AppText} from '@Commons/AppText';
import styles from './styles';
import {ActiveTab} from '@Types/UserList';

interface TabProps {
  setActiveTab(type: ActiveTab): void;
  activeTab: ActiveTab;
}

export const Tab: React.FC<TabProps> = ({activeTab, setActiveTab}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          activeTab === ActiveTab.Watch_List ? styles.activeTab : styles.tab,
          styles.TabLeft,
        ]}
        onPress={() => setActiveTab(ActiveTab.Watch_List)}>
        <AppText>Watches</AppText>
      </TouchableOpacity>
      <TouchableOpacity
        style={
          activeTab === ActiveTab.Likes_List ? styles.activeTab : styles.tab
        }
        onPress={() => setActiveTab(ActiveTab.Likes_List)}>
        <AppText> Likes</AppText>
      </TouchableOpacity>
    </View>
  );
};
