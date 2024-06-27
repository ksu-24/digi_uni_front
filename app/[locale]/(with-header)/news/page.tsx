import {Typography} from "@mui/material";
import {getTranslations, unstable_setRequestLocale} from "next-intl/server";
import someTiles from "@/public/images/some-tiles.svg";
import dynamic from "next/dynamic";

const NewsPanel = dynamic(
    () => import(`@/app/[locale]/(with-header)/news/news-panel`).then((module) => module.default),
    {
        ssr: false,
        loading: () => <Typography>Loading...</Typography>
    }
);

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
        <>
            <img src={someTiles.src} alt="Some tiles" className="absolute top-0 left-1/2 -translate-x-1/2"/>
            <Typography variant="h1">{translations("title")}:</Typography>
            <NewsPanel/>
        </>
    )
}