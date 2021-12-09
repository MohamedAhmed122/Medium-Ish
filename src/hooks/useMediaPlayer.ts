import {useEffect} from 'react';
import {EmitterSubscription} from 'react-native';
import SoundPlayer from 'react-native-sound-player';

export const useMediaPlayer = () => {
  let _onFinishedPlayingSubscription: EmitterSubscription;
  let _onFinishedLoadingSubscription: EmitterSubscription;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    _onFinishedPlayingSubscription = SoundPlayer.addEventListener(
      'FinishedPlaying',
      ({success}) => {
        console.log('finished playing', success);
      },
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    _onFinishedLoadingSubscription = SoundPlayer.addEventListener(
      'FinishedLoading',
      ({success}) => {
        console.log('finished loading', success);
      },
    );
    // Remove all the subscriptions when component will unmount
    return () => {
      _onFinishedPlayingSubscription.remove();
      _onFinishedLoadingSubscription.remove();
    };
  }, []);
};
