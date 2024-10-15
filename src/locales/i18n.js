import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

const resources = {
  tr: {
    translation: {
      welcome: 'Hosgeldiniz',
    },
  },
  en: {
    translation: {
      welcome: 'Welcome',
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    lng: 'en',
    resources,
    compatibilityJSON: 'v3',
  });

export default i18n;
