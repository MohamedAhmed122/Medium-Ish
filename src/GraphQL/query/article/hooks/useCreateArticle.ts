import {useMutation} from '@apollo/client';
import {Article, CreateArticleParam, CREATE_ARTICLE} from '@GraphQL/query';

export const useCreateArticle = () => {
  const [createArticle, {loading, data, error}] = useMutation<
    Article,
    CreateArticleParam
  >(CREATE_ARTICLE, {
    errorPolicy: 'ignore',
    onCompleted: () => {
      console.log('YES');
    },
    onError: () => {
      console.log('Error');
    },
  });

  return {createArticle, loading, data, error};
};
