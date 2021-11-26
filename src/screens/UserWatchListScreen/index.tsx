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
import {PostCard} from '@Components/PostCard';

// import styles from './styles'

export interface Req {
  body: any;
}
export interface Req {
  Json: any;
}

interface UserWatchListProps {
  navigation: StackNavigationProp<TabParamList, TabParams>;
}
export const UserWatchListScreen: React.FC<UserWatchListProps> = ({
  navigation,
}) => {
  const [activeTab, setActiveTab] = useState<ActiveTab>(ActiveTab.Watch_List);

  const handleNavigate = () =>
    navigation.navigate(Navigators.Tab.Post, {
      screen: Navigators.PostStack.PostDetail,
      params: {id: '618fd2de5fd7ce77dfdd44f2'},
    });

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
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => (
          <PostCard item={item} handleNavigate={handleNavigate} />
        )}
      />
    </Screen>
  );
};

const data = [
  {
    id: '1',
    body: 'Some Body Comes Here',
    createdAt: '12.10.19',
    username: 'Mohamed ',
    likeCount: 120,
    commentLike: 120,
  },
];
