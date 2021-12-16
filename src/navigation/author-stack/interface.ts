import {AuthorDetail} from '@GraphQL/requests';

export type NO_PARAMS = undefined;

export enum AuthorParams {
  AuthorSettings = 'AuthorSettings',
  EditProfile = 'EditProfile',
  AuthorArticles = 'AuthorArticles',
  AuthorLocation = 'AuthorLocation',
  EditImage = 'EditImage',
  AuthorProfile = 'AuthorProfile',
}
export type AuthorParamList = {
  AuthorSettings: NO_PARAMS;
  EditProfile: {author: AuthorDetail};
  AuthorArticles: {id: string};
  AuthorLocation: {id: string};
  AuthorProfile: {id: string};
  EditImage: NO_PARAMS;
};
