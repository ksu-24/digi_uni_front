import {NextIntlClientProvider} from 'next-intl';
import {getMessages, unstable_setRequestLocale} from 'next-intl/server';
import React from "react";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";
import {ThemeProvider} from "@mui/system";
import theme from "@/app/[locale]/theme";
import {Fonts} from "@/app/_util/components/fonts";
import {locales} from "@/app/_localization/i18n";
import {StyledEngineProvider} from "@mui/material";
import "@/public/global.css"
import Footer from "@/app/[locale]/_footer/footer";

export default async function LocaleLayout(
    {
        children,
        params: {locale}
    }: {
        children: React.ReactNode;
        params: { locale: string };
    }
) {

    unstable_setRequestLocale(locale);

    const dicts = await getMessages();

    return (
        <html lang={locale} className="min-w-[100dvw]">
        <head>
            <title>Digiuni</title>
            <Fonts/>
        </head>
        <body className="w-full">
        <NextIntlClientProvider messages={dicts}>
            <StyledEngineProvider injectFirst>
                <AppRouterCacheProvider options={{
                    prepend: true
                }}>
                    <ThemeProvider theme={theme}>
                        {children}
                        <Footer/>
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </StyledEngineProvider>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}

export async function generateStaticParams() {
    return locales.map(locale => ({
        locale: locale
    }));
}

export async function getStaticPaths() {
    return {
        paths: locales.map(locale => ({
            params: {
                locale
            }
        })),
        fallback: false
    };
}