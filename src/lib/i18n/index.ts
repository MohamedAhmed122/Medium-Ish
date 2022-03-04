import dayjs from 'dayjs';
import {NativeModules, Platform} from 'react-native';
import en from './locales/en';
import ru from './locales/ru';

export const localeFromSettings = (() => {
  switch (Platform.OS) {
    case 'android':
      return NativeModules?.I18nManager?.localeIdentifier
        ?.replace('-', '_')
        .split('_')?.[0];
    case 'ios':
      return NativeModules?.SettingsManager?.settings?.AppleLanguages?.[0]
        .slice(0, 2)
        ?.toLowerCase();

    default:
      return 'en';
  }
})();

const t = (() => {
  console.log('here');
  switch (localeFromSettings) {
    case 'ru':
      require('dayjs/locale/ru');
      dayjs.locale('ru');
      return ru;

    case 'en':
      require('dayjs/locale/en');
      dayjs.locale('en');
      return en;

    default:
      return en;
  }
})();

export default t;
