import {ParamId, Nullable} from '@Types/Common';
import {Article} from '@GraphQL/query';

// Navigation
import {AuthParamList, AuthParams} from '@Navigation/auth-stack/interface';
import {StackNavigationProp} from '@react-navigation/stack';

export type ImageType = {url: string};
export type ColorType = {hex: string};
export type LocationType = {latitude: number; longitude: number};
export type Navigation = StackNavigationProp<
  AuthParamList,
  AuthParams.Register
>;

export interface Author {
  id: string;
  name: string;
  username: string;
  color: ColorType;
  image: ImageType;
  imageUrl: string;
  email: string;
}

export interface InitiateAuthor {
  id: string;
  name: string;
  username: string;
}

export interface AuthorDetail extends Author {
  email: string;
  hideEmail: string;
  bio: Nullable<string>;
  location: Nullable<LocationType>;
  article: Article | [];
}

export interface AuthorUploadImage {
  image: ImageType;
}

export interface AuthorLocation {
  location: LocationType;
}

// PARAMS
export interface InitiateAuthorParams extends Omit<InitiateAuthor, 'id'> {}

export interface UpdateAvatarParams extends ParamId {
  imageUrl: string;
}

export interface UpdateImageParams extends ParamId {
  handle: string;
  fileName: string;
}
export interface UpdateAuthorInfoParams extends ParamId {
  hex: string;
  bio: string;
}

export interface AuthorLocationParams extends ParamId {
  latitude: number;
  longitude: number;
}
