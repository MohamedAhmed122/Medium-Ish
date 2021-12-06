import {CREATE_COMMENT} from './../query/createComment';
import {useMutation} from '@apollo/client';
import {Comment} from '@GraphQL/query';

export const useCreateArticle = () => {
  const [createComment, {data, loading, error}] = useMutation<
    {createComment: Comment},
    Comment
  >(CREATE_COMMENT);
  console.log(data, loading, error);
  return {data, loading, createComment};
};
