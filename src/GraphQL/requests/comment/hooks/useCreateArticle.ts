import {CREATE_COMMENT} from '@GraphQL/requests';
import {useMutation} from '@apollo/client';
import {Comment} from '@GraphQL/requests';
import {errorHandler} from '@Utils/errorHandler';

export const useCreateComment = () => {
  const [createComment, {loading}] = useMutation<
    {createComment: Comment},
    Comment
  >(CREATE_COMMENT, {
    onError: err => {
      errorHandler(err);
    },
  });

  return {commentLoading: loading, createComment};
};
