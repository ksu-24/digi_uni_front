import {Box, NoSsr, Typography} from "@mui/material";
import {getTranslations, unstable_setRequestLocale} from "next-intl/server";
import NewsPanel from "@/app/[locale]/(with-header)/news/news-panel";
import SubscribeForm from "@/app/[locale]/(with-header)/news/subscribe";
import {HeadingWrapper, PageTopWrapper} from "@/app/_util/components/wrappers";
import EnterAnimation from "@/app/_util/components/enter-animation";
import Breadcrumbs from "@/app/_util/components/breadcrumbs";
import React from "react";
import screens from "@/resources/screens.json";

export default async function News(
    {
        params: {locale}
    }: {
        params: { locale: string };
    }
) {
    unstable_setRequestLocale(locale)
    const translations = await getTranslations("news");
    return (
        <PageTopWrapper>
            <HeadingWrapper>
                <Breadcrumbs/>
                <EnterAnimation direction="up" offset={20} duration={500} fadeDuration={400}>
                    <Typography
                        variant="h1"
                        className="leading-[1.15]
                        xl:text-[50px]
                        2xl:text-[54px]
                        3xl:text-[56px]
                        " letterSpacing={"-0.01rem"}
                        sx={{
                            fontSize: "52px",
                            [`@media (max-width: ${screens.lg})`]: {
                                fontSize: "46px"
                            },
                            [`@media (max-width: ${screens.md})`]: {
                                fontSize: "38px"
                            },
                            [`@media (max-width: ${screens.xs})`]: {
                                fontSize: "36px"
                            },
                        }}
                    >{translations("title")}:</Typography>
                </EnterAnimation>
            </HeadingWrapper>
            <NoSsr fallback={<Box className="h-dvh"/>}>
                <NewsPanel/>
            </NoSsr>
            <SubscribeForm/>
        </PageTopWrapper>
    )
}