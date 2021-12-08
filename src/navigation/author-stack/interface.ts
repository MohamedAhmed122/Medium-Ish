export type NO_PARAMS = undefined;

export enum AuthorParams {
  AuthorProfile = 'AuthorProfile',
  EditProfile = 'EditProfile',
  AuthorArticles = 'AuthorArticles',
  AuthorLocation = 'AuthorLocation',
}
export type AuthorParamList = {
  AuthorProfile: NO_PARAMS;
  EditProfile: NO_PARAMS;
  AuthorArticles: NO_PARAMS;
  AuthorLocation: NO_PARAMS;
};
