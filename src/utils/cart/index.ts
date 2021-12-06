import {ReactiveVar} from '@apollo/client';
import {Article} from '@GraphQL/query';
// import { Post, Article } from '@GraphQL/query';

export const watchListResolver = (
  watchItem: ReactiveVar<Article[]>,
  item: Article,
) => {
  const existingCartItem = watchItem().find(
    cartItem => cartItem.id === item.id,
  );
  if (existingCartItem) {
    watchItem(watchItem().filter(cartItem => cartItem.id !== item.id));
  } else {
    const newItem = {...item, isOnWatchList: true};
    watchItem([newItem, ...watchItem()]);
  }
};
