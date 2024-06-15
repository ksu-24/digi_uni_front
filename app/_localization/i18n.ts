import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

export const locales = Object.freeze(['en', 'uk']);

export default getRequestConfig(async ({locale}) => {
    // Validate that the incoming `locale` parameter is valid
    if (!locales.includes(locale as any)) notFound();

    return {
        messages: (await import(`@/resources/dicts/${locale}.json`)).default
    };
});