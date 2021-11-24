import React from 'react';
import {FlatList} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SearchCard} from './SearchCard';
import {AppInput, Screen, ItemSeparator, Empty} from '@Commons/index';
import {COLORS} from '@Styles/colors';
import styles from './styles';
// import styles from './styles'

const data = [1, 2, 3, 4];

interface SearchScreenProps {}
export const SearchScreen: React.FC<SearchScreenProps> = () => {
  return (
    <Screen>
      <FlatList
        ListHeaderComponentStyle={styles.listHeaderComponentStyle}
        contentContainerStyle={styles.contentContainerStyle}
        ListHeaderComponent={() => (
          <AppInput placeholder="Search">
            <AntDesign name="search1" color={COLORS.darkGray} size={22} />
          </AppInput>
        )}
        keyExtractor={(_, index) => index.toString()}
        data={data}
        renderItem={({}) => <SearchCard />}
        ItemSeparatorComponent={ItemSeparator}
        ListEmptyComponent={Empty}
      />
    </Screen>
  );
};
