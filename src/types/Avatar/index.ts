export type Seed =
  | 'personas'
  | 'micah'
  | 'miniavs'
  | 'big-smile'
  | 'big-ears'
  | 'avataaars'
  | 'adventurer'
  | 'gridy'
  | 'male'
  | 'female'
  | 'human';

export enum Status {
  Default = 'DEFAULT',
  GenerateAvatar = 'GENERATE_AVATAR',
  UploadImage = 'UPLOAD_IMAGE',
}
