export enum ActiveTab {
  Watch_List = 'WATCH_LIST',
  Likes_List = 'LIKES_LIST',
}

export enum UserOptions {
  Articles = 'Articles',
  Edit = 'Edit',
  Location = 'Location',
  Share = 'Share',
  Logout = 'Logout',
}
// export type UserOption = 'Articles' | 'Edit' | 'Location' | 'Share' | 'Logout';

export interface UserItems {
  icon: string;
  id: string;
  title: string;
}
