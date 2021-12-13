import {AuthorDetail} from '@GraphQL/query';

export type NO_PARAMS = undefined;

export enum AuthorParams {
  AuthorProfile = 'AuthorProfile',
  EditProfile = 'EditProfile',
  AuthorArticles = 'AuthorArticles',
  AuthorLocation = 'AuthorLocation',
  EditImage = 'EditImage',
}
export type AuthorParamList = {
  AuthorProfile: NO_PARAMS;
  EditProfile: {author: AuthorDetail};
  AuthorArticles: {id: string};
  AuthorLocation: {id: string};
  EditImage: NO_PARAMS;
};
