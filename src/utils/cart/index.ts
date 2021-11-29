import {ReactiveVar} from '@apollo/client';
import {Post} from '@GraphQL/query';

export const watchListResolver = (
  watchItem: ReactiveVar<Post[]>,
  item: Post,
) => {
  const existingCartItem = watchItem().find(
    cartItem => cartItem.id === item.id,
  );
  if (existingCartItem) {
    watchItem(watchItem().filter(cartItem => cartItem.id !== item.id));
  } else {
    watchItem([item, ...watchItem()]);
  }
};
