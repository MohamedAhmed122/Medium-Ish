import {COLORS} from '@Styles/colors';
import {Seed} from '@Types/Avatar';

export const avatars: {id: string; type: Seed; title: string; color: string}[] =
  [
    {
      id: '1',
      type: 'personas',
      title: 'Personas',
      color: COLORS.primary,
    },
    {
      id: '2',
      type: 'micah',
      title: 'Micah',
      color: COLORS.secondary,
    },

    {
      id: '12',
      type: 'miniavs',
      title: 'Miniavs',
      color: COLORS.blue,
    },
    {
      id: '4',
      type: 'big-smile',
      title: 'Big Smile',
      color: COLORS.darkGray,
    },
    {
      id: '5',
      type: 'big-ears',
      title: 'Big Ears',
      color: COLORS.orange,
    },
    {
      id: '6',
      type: 'avataaars',
      title: 'Avataaars',
      color: '#FFD14D',
    },

    {
      id: '7',
      type: 'adventurer',
      title: 'Adventurer',
      color: COLORS.danger,
    },
    {
      id: '8',
      type: 'gridy',
      title: 'Gridy',
      color: '#FCDD0D',
    },
    {
      id: '9',
      type: 'male',
      title: 'Male',
      color: '#D10DFF',
    },
    {
      id: '10',
      type: 'female',
      title: 'Female',
      color: '#4A87FF',
    },
    {
      id: '11',
      type: 'human',
      title: 'Human',
      color: '#E3560B',
    },
  ];

export const categories = [
  {label: 'Furniture', id: 1, icon: 'floor-lamp', color: '#fc5c6c'},
  {label: 'Cars', id: 2, icon: 'car', color: '#fd9644'},
  {label: 'Cameras', id: 3, icon: 'camera', color: '#fed330'},
  {label: 'Games', id: 4, icon: 'cards', color: '#26de81'},
  {label: 'Clothing', id: 5, icon: 'shoe-heel', color: '#2bcbba'},
  {label: 'Sports', id: 6, icon: 'basketball', color: '#45aaf2'},
  {label: 'Movies & Music', id: 7, icon: 'headphones', color: '#4b7bec'},
];

export const colors = [
  {label: '#fc5c6c', id: 1, icon: null, color: '#fc5c6c'},
  {label: '#fd9644', id: 2, icon: null, color: '#fd9644'},
  {label: '#fed330', id: 3, icon: null, color: '#fed330'},
  {label: '#26de81', id: 4, icon: null, color: '#26de81'},
  {label: '#2bcbba', id: 5, icon: null, color: '#2bcbba'},
  {label: '#45aaf2', id: 6, icon: null, color: '#45aaf2'},
  {label: '#4b7bec', id: 7, icon: null, color: '#4b7bec'},

  {label: '#186B8C', id: 8, icon: null, color: '#186B8C'},
  {label: '#4EBF7F', id: 9, icon: null, color: '#4EBF7F'},
  {label: '#F29E38', id: 10, icon: null, color: '#F29E38'},

  {label: '#9c9c9c', id: 11, icon: null, color: '#9c9c9c'},
  {label: '#55C1D9', id: 12, icon: null, color: '#55C1D9'},
  {label: '#000', id: 13, icon: null, color: '#000'},

  {label: '#D10DFF', id: 14, icon: null, color: '#D10DFF'},
  {label: '#4A87FF', id: 15, icon: null, color: '#4A87FF'},
  {label: '#E3560B', id: 16, icon: null, color: '#E3560B'},
];
