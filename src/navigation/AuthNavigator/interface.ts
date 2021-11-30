export type NO_PARAMS = undefined;

export enum AuthParams {
  Login = 'Login',
  Register = 'Register',
  UserAvatar = 'UserAvatar',
  UserBio = 'UserBio',
  UserLocation = 'UserLocation',
}
export type AuthParamList = {
  Login: NO_PARAMS;
  Register: NO_PARAMS;
  UserAvatar: NO_PARAMS;
  UserBio: NO_PARAMS;
  UserLocation: NO_PARAMS;
};
