import SoundPlayer from 'react-native-sound-player';

export const playSong = (): void => {
  try {
    SoundPlayer.playSoundFile('swiftly', 'mp3');
  } catch (e) {
    console.log('cannot play the song file', e);
  }
};
