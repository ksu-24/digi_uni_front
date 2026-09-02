import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations, unstable_setRequestLocale} from 'next-intl/server';
import React from "react";
import type {Metadata} from "next";
import GoogleAnalytics from "@/app/_util/analytics/google-analytics";
import {buildAlternates, SITE_NAME, SITE_URL} from "@/app/_util/seo";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";
import {ThemeProvider} from "@mui/system";
import theme from "@/app/_theme/theme";
import {Fonts} from "@/app/_util/components/fonts";
import {Box, StyledEngineProvider} from "@mui/material";
import "@/public/global.css"
import MobileHeader from "@/app/[locale]/_mobileHeader/mobile-header";

export async function generateMetadata(
    {
        params: {locale}
    }: {
        params: { locale: string }
    }
): Promise<Metadata> {
    const translations = await getTranslations({locale, namespace: "meta"});

    return {
        metadataBase: new URL(SITE_URL),
        title: {
            default: translations("siteTitle"),
            template: `%s | ${SITE_NAME}`
        },
        description: translations("description"),
        alternates: buildAlternates(locale, "/"),
        openGraph: {
            type: "website",
            siteName: SITE_NAME,
            title: translations("siteTitle"),
            description: translations("description"),
            url: `${SITE_URL}/${locale}`,
            locale: locale === "uk" ? "uk_UA" : "en_US",
            images: [
                {
                    url: "/images/commons/og-image.png",
                    width: 1200,
                    height: 630,
                    alt: SITE_NAME
                }
            ]
        },
        twitter: {
            card: "summary_large_image",
            title: translations("siteTitle"),
            description: translations("description")
        },
        robots: {
            index: true,
            follow: true
        }
    };
}

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
            <Fonts/>
        </head>
        <body className="bg-[#efeff0]">
        <GoogleAnalytics/>
        <NextIntlClientProvider messages={dicts}>
            <StyledEngineProvider injectFirst>
                <AppRouterCacheProvider options={{
                    prepend: true
                }}>
                    <ThemeProvider theme={theme}>
                        <MobileHeader/>
                        <Box className="mx-auto relative w-full h-full overflow-x-hidden
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