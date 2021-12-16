import React, {useState} from 'react';

import {SearchCard} from './SearchCard';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {AppInput, Screen, ItemSeparator, Empty} from '@Commons/index';
import {COLORS} from '@Styles/colors';
import {useSearchArticles} from '@GraphQL/requests';
import {FeaturedFlatList} from '@Components/FeaturedFlatList';
import styles from './styles';

interface SearchScreenProps {}
export const SearchScreen: React.FC<SearchScreenProps> = () => {
  const [title, setTitle] = useState<string>('');
  const {data: articles, loading} = useSearchArticles(title);

  return (
    <Screen>
      <AppInput value={title} onChangeText={setTitle} placeholder="Search">
        <AntDesign
          name="search1"
          color={COLORS.darkGray}
          size={22}
          style={styles.icon}
        />
      </AppInput>
      <FeaturedFlatList
        loading={loading}
        ListHeaderComponentStyle={styles.listHeaderComponentStyle}
        contentContainerStyle={styles.contentContainerStyle}
        keyExtractor={item => item.id}
        data={articles?.articles}
        renderItem={({item}) => <SearchCard item={item} />}
        ItemSeparatorComponent={ItemSeparator}
        ListEmptyComponent={Empty}
      />
    </Screen>
  );
};
