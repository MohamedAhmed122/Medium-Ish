import Share from 'react-native-share';

export const shareProfile = async () => {
  const shareOptions = {
    title: 'Share via Medium-Ish',
    message: 'Check my Profile on Medium-Ish',
    url: 'some share url',
  };
  await Share.open(shareOptions)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};
