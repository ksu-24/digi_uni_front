import {Box, NoSsr, Typography} from "@mui/material";
import {getTranslations, unstable_setRequestLocale} from "next-intl/server";
import someTiles from "@/public/images/commons/some-tiles.svg";
import NewsPanel from "@/app/[locale]/(with-header)/news/news-panel";
import SubscribeForm from "@/app/[locale]/(with-header)/news/subscribe";
import {DefaultWrapper} from "@/app/_util/components/default-wrapper";
import EnterAnimation from "@/app/_util/components/enter-animation";

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
        <DefaultWrapper className="!p-0">
            <img src={someTiles.src} alt="Some tiles"
                 className="absolute top-0 left-1/2 -translate-x-1/2 hidden lg:block"/>
            <DefaultWrapper>
                <EnterAnimation direction="up" offset={20} duration={500} fadeDuration={400}>
                    <Typography variant="h1">{translations("title")}:</Typography>
                </EnterAnimation>
                <NoSsr fallback={<Box className="h-dvh"/>}>
                    <NewsPanel/>
                </NoSsr>
                <SubscribeForm/>
            </DefaultWrapper>
        </DefaultWrapper>
    )
}