import { getRequestConfig, type GetRequestConfigParams } from 'next-intl/server';
import { defaultLocale, locales } from '../../../next-intl.config';

export default getRequestConfig(async ({ requestLocale }: GetRequestConfigParams) => {
  const requested = await requestLocale;

  const locale = requested && locales.includes(requested) ? requested : defaultLocale;

  const messages = (await import(`../../../messages/${locale}.json`)).default;

  return { locale, messages };
});
