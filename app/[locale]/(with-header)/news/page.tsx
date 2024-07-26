import {NoSsr, Typography} from "@mui/material";
import {getTranslations, unstable_setRequestLocale} from "next-intl/server";
import someTiles from "@/public/images/commons/some-tiles.svg";
import NewsPanel from "@/app/[locale]/(with-header)/news/news-panel";
import SubscribeForm from "@/app/[locale]/(with-header)/news/subscribe";
import {DefaultContainer} from "@/app/_util/components/default-container";

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
        <DefaultContainer className="!p-0">
            <img src={someTiles.src} alt="Some tiles" className="absolute top-0 left-1/2 -translate-x-1/2 hidden lg:block"/>
            <DefaultContainer>
                <Typography variant="h1">{translations("title")}:</Typography>
                <NoSsr>
                    <NewsPanel/>
                </NoSsr>
                <SubscribeForm/>
            </DefaultContainer>
        </DefaultContainer>
    )
}