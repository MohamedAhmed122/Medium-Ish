import {useMutation} from '@apollo/client';
import {Article, CreateArticleParam, CREATE_ARTICLE} from '@GraphQL/requests';
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
    onError: err => {
      errorHandler(err);
    },
  });

  return {createArticle, loading, data, error};
};
