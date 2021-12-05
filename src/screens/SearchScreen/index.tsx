/* eslint-disable curly */
import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {SearchCard} from './SearchCard';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {AppInput, Screen, ItemSeparator, Empty} from '@Commons/index';
import {COLORS} from '@Styles/colors';
import styles from './styles';
import {useSearchArticles} from '@GraphQL/query';
import {FeaturedFlatList} from '@Components/FeaturedFlatList';

interface SearchScreenProps {}
export const SearchScreen: React.FC<SearchScreenProps> = () => {
  const [title, setTitle] = useState<string>('');
  const {data: articles, loading} = useSearchArticles(title);

  return (
    <Screen>
      <AppInput value={title} onChangeText={setTitle} placeholder="Search">
        <AntDesign name="search1" color={COLORS.darkGray} size={22} />
      </AppInput>
      <FeaturedFlatList
        loading={loading}
        ListHeaderComponentStyle={styles.listHeaderComponentStyle}
        contentContainerStyle={styles.contentContainerStyle}
        keyExtractor={item => item.id}
        data={articles?.articles}
        renderItem={({item}) => <SearchCard item={item} loading={loading} />}
        ItemSeparatorComponent={ItemSeparator}
        ListEmptyComponent={Empty}
      />
    </Screen>
  );
};
