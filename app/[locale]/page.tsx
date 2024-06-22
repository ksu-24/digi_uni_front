import {Stack} from "@mui/material";
import Slogan from "@/app/[locale]/_slogan/slogan";
import {unstable_setRequestLocale} from "next-intl/server";
import Tiles from "@/app/[locale]/tiles";
import Erasmus from "@/app/[locale]/_erasmus/erasmus";
import Mission from "@/app/[locale]/_mission/mission";
import Partners from "@/app/[locale]/_partners/partners";
import LatestNews from "@/app/[locale]/_latestNews/latest-news";

export default async function Main(params: { locale: string }) {
    unstable_setRequestLocale(params.locale);
    return (
        <Stack className="h-full w-full">
            <section id="slogan">
                <Slogan/>
            </section>
            <Tiles/>
            <section id="erasmus">
                <Erasmus/>
            </section>
            <section id="mession">
                <Mission/>
            </section>
            <section id="partners">
                <Partners/>
            </section>
            <section id="latest-news">
                <LatestNews/>
            </section>
        </Stack>
    );
}