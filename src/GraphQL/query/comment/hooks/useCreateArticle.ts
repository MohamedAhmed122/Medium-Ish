import {CREATE_COMMENT} from '@GraphQL/query';
import {useMutation} from '@apollo/client';
import {Comment} from '@GraphQL/query';
import {errorHandler} from '@Utils/errorHandler';

export const useCreateComment = () => {
  const [createComment, {loading}] = useMutation<
    {createComment: Comment},
    Comment
  >(CREATE_COMMENT, {
    onError: ({networkError}) => {
      errorHandler(networkError);
    },
  });

  return {commentLoading: loading, createComment};
};
