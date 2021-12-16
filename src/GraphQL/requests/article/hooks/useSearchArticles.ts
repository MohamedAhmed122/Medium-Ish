import {SEARCH_ARTICLES} from '../query';
import {useQuery} from '@apollo/client';
import {SearchArticle} from '@GraphQL/requests';

export const useSearchArticles = (title: string) => {
  const {data, loading} = useQuery<
    {articles: SearchArticle[]},
    {title: string}
  >(SEARCH_ARTICLES, {
    variables: {title},
  });

  return {data, loading};
};
