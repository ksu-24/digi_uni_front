import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import React from "react";

export default async function LocaleLayout(
    {
        children,
        params: {locale}
    }: {
        children: React.ReactNode;
        params: { locale: string };
    }
) {

    const dicts = await getMessages();

    return (
        <html lang={locale}>
        <body>
        <NextIntlClientProvider messages={dicts}>
            {children}
        </NextIntlClientProvider>
        </body>
        </html>
    );
}