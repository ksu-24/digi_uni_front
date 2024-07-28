import {Box, NoSsr, Stack, Typography} from "@mui/material";
import {getTranslations, unstable_setRequestLocale} from "next-intl/server";
import NewsPanel from "@/app/[locale]/(with-header)/news/news-panel";
import SubscribeForm from "@/app/[locale]/(with-header)/news/subscribe";
import {BaseWrapper} from "@/app/_util/components/base-wrapper";
import EnterAnimation from "@/app/_util/components/enter-animation";
import DynamicBackwardsNav from "@/app/_util/components/dynamic-backwards-nav";
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
        <BaseWrapper className="
        max-xs:mb-[18dvw]
        xl:pt-[12dvw] xl:pb-[4dvw]
        3xl:pt-[9dvw] 3xl:pb-[3dvw]
        " disableGap sx={{
            paddingTop: "13dvw",
            [`@media (max-width: ${screens.xl})`]: {
                paddingTop: "24dvw"
            },
            [`@media (max-width: ${screens.md})`]: {
                paddingTop: "18dvw",
                paddingBottom: "16dvw"
            },
            [`@media (max-width: ${screens.xs})`]: {
                paddingTop: "24dvw",
                paddingBottom: "12dvw"
            },
        }}>
            <Stack className="gap-6
            max-xs:mt-[10dvw] max-xs:mb-[8dvw]
            xl:gap-[2dvw]
            2xl:gap-[1.5dvw]
            ">
                <DynamicBackwardsNav/>
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
            </Stack>
            <NoSsr fallback={<Box className="h-dvh"/>}>
                <NewsPanel/>
            </NoSsr>
            <SubscribeForm/>
        </BaseWrapper>
    )
}