import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import React from "react";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";
import {ThemeProvider} from "@mui/system";
import theme from "@/app/[locale]/theme";
import "@/static/global.css";

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
            <AppRouterCacheProvider>
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </AppRouterCacheProvider>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}