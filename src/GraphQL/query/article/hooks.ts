import {GET_ARTICLES, GET_SINGLE_ARTICLE} from './query';
import {Articles} from './interface';
import {useQuery, ApolloError} from '@apollo/client';
import {Nullable, ParamId} from '@Types/Common';
import {ArticleDetail} from '..';

interface UseGetArticle {
  articles: Nullable<Articles>;
  articleError?: ApolloError;
  articleLoading: boolean;
}

export const useGetArticles = (): UseGetArticle => {
  const {data, error, loading} = useQuery<Articles>(GET_ARTICLES);

  return {articles: data, articleError: error, articleLoading: loading};
};

export const useGetArticleById = (id: string) => {
  const {data, error, loading} = useQuery<{article: ArticleDetail}, ParamId>(
    GET_SINGLE_ARTICLE,
    {
      variables: {id},
    },
  );
  return {data, error, loading};
};
