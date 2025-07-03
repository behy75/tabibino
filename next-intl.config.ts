export const locales = ['en', 'fa'];
export const defaultLocale = 'fa';
export const localePrefix = 'always';

export default {
  locales,
  defaultLocale,
  localePrefix,
  messages: {
    en: () => import('./src/messages/en.json'),
    fa: () => import('./src/messages/fa.json'),
  },
};
