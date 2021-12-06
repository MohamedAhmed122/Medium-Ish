import {ReactiveVar} from '@apollo/client';
import {Article} from '@GraphQL/query';

export const watchListResolver = (
  watchItem: ReactiveVar<Article[]>,
  item: Article,
) => {
  const existingArticle = watchItem().find(article => article.id === item.id);
  if (existingArticle) {
    watchItem(watchItem().filter(cartItem => cartItem.id !== item.id));
  } else {
    const newItem = {...item, isOnWatchList: true};
    watchItem([newItem, ...watchItem()]);
  }
};
