import {ParamId} from '@Types/Common';
import {Article} from '..';

export type ImageType = {url: string};
export type ColorType = {hex: string};
export type LocationType = {latitude: number; longitude: number};

export interface Author {
  id: string;
  username: string;
  color: ColorType;
  image: ImageType;
}

export interface InitiateAuthor {
  id: string;
  email: string;
  name: string;
  username: string;
}

export interface AuthorDetail extends Author {
  email: string;
  hideEmail: string;
  location: LocationType;
  article: Article;
}

export interface AuthorAvatar {
  image: ImageType;
}

export interface AuthorBio {
  bio: string;
  color: ColorType;
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
