import {Seed} from '@Types/Avatar';

export const getAvatarUri = (seed: Seed, random: number): string => {
  return `https://avatars.dicebear.com/api/${seed}/${random}.svg`;
};

export const getRandomNumber = (number: number = 1000): number => {
  return Math.floor(Math.random() * number + 1);
};
