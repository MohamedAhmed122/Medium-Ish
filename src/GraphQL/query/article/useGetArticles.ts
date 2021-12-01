import {GET_ARTICLES} from './query';
import {Articles} from './interface';
import {useQuery, ApolloError} from '@apollo/client';
import {Nullable} from '@Types/Common';

interface UseGetArticle {
  articles: Nullable<Articles>;
  articleError?: ApolloError;
  articleLoading: boolean;
}

export const useGetArticles = (): UseGetArticle => {
  const {data, error, loading} = useQuery<Articles>(GET_ARTICLES);

  return {articles: data, articleError: error, articleLoading: loading};
};
