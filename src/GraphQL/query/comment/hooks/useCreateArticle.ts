import {CREATE_COMMENT} from '@GraphQL/query';
import {useMutation} from '@apollo/client';
import {Comment} from '@GraphQL/query';

export const useCreateComment = () => {
  const [createComment, {loading}] = useMutation<
    {createComment: Comment},
    Comment
  >(CREATE_COMMENT, {
    onError: err => {
      console.log(err);
    },
  });

  return {commentLoading: loading, createComment};
};
