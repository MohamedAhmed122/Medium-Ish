import {Post} from '@GraphQL/query';
export interface Comment {
  id: string;
  createdAt: string;
  username: string;
  body: string;
}

export interface PostDetail extends Post {
  comments: Comment[];
}
