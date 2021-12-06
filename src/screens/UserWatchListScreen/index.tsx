import React, {useState} from 'react';
// TYPES
import {Navigators} from '@Navigation/index';
import {StackNavigationProp} from '@react-navigation/stack';
import {TabParamList, TabParams} from '@Navigation/TabNavigation/interface';
import {ActiveTab} from '@Types/UserList';
// RENDER
import {Screen} from '@Commons/Screen';
import {Tab, Header} from './components';
import {FlatList} from 'react-native';
import {ArticleCard} from '@Components/ArticleCard';
import {useReactiveVar} from '@apollo/client';
import {watchListVar} from '@GraphQL/Apollo/cache';
import {watchListResolver} from '@Utils/watchListReslover';
import {Article} from '@GraphQL/query';
import {Empty} from '@Commons/Empty';

// import styles from './styles'

interface UserWatchListProps {
  navigation: StackNavigationProp<TabParamList, TabParams>;
}
export const UserWatchListScreen: React.FC<UserWatchListProps> = ({
  navigation,
}) => {
  const [activeTab, setActiveTab] = useState<ActiveTab>(ActiveTab.Watch_List);
  const watchList = useReactiveVar(watchListVar);

  const handleNavigate = () =>
    navigation.navigate(Navigators.Tab.Article, {
      screen: Navigators.ArticleStack.ArticleDetail,
      params: {id: '618fd2de5fd7ce77dfdd44f2'},
    });

  console.log(watchListVar());

  const handleWatchList = (item: Article): void =>
    watchListVar && watchListResolver(watchListVar, item);

  const GetActiveTitle = () =>
    activeTab === ActiveTab.Watch_List
      ? 'My Favorite Posts'
      : 'I Like These Articles';

  return (
    <Screen>
      <FlatList
        ListHeaderComponent={() => (
          <>
            <Header title={GetActiveTitle()} />
            <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
          </>
        )}
        data={watchList}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ArticleCard
            item={item}
            handleNavigate={handleNavigate}
            handleWatchListItems={handleWatchList}
          />
        )}
        ListEmptyComponent={Empty}
      />
    </Screen>
  );
};
