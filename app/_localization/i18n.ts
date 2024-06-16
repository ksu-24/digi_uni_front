import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

export const locales = Object.freeze(['uk', 'en']);

export const localeNames = Object.freeze({
    en: 'ENG',
    uk: 'УКР'
}) as {
    [locale in typeof locales[number]]: string
};


export default getRequestConfig(async ({locale}) => {

    if (!locales.includes(locale as any)) notFound();

    return {
        messages: (await import(`@/resources/dicts/${locale}.json`)).default
    };
});