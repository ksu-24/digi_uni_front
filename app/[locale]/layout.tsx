import {NextIntlClientProvider} from 'next-intl';
import {getMessages, unstable_setRequestLocale} from 'next-intl/server';
import React from "react";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";
import {ThemeProvider} from "@mui/system";
import theme from "@/app/_theme/theme";
import {Fonts} from "@/app/_util/components/fonts";
import {Box, StyledEngineProvider} from "@mui/material";
import "@/public/global.css"
import MobileHeader from "@/app/[locale]/_mobileHeader/mobile-header";

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
        <html lang={locale}>
        <head>
            <title>Digiuni</title>
            <Fonts/>
        </head>
        <body className="bg-[#efeff0]">
        <NextIntlClientProvider messages={dicts}>
            <StyledEngineProvider injectFirst>
                <AppRouterCacheProvider options={{
                    prepend: true
                }}>
                    <ThemeProvider theme={theme}>
                        <MobileHeader/>
                        <Box className="mx-auto relative w-full h-full
                        3xl:w-[75dvw]
                        " sx={{
                            "& > *": {
                                backgroundColor: "white"
                            }
                        }}>
                            {children}
                        </Box>
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </StyledEngineProvider>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}