import {useMutation} from '@apollo/client';
import {Article, CreateArticleParam, CREATE_ARTICLE} from '@GraphQL/query';
import {errorHandler} from '@Utils/errorHandler';

export const useCreateArticle = () => {
  const [createArticle, {loading, data, error}] = useMutation<
    Article,
    CreateArticleParam
  >(CREATE_ARTICLE, {
    errorPolicy: 'ignore',
    onCompleted: () => {
      console.log('YES');
    },
    onError: ({networkError}) => {
      errorHandler(networkError);
    },
  });

  return {createArticle, loading, data, error};
};
