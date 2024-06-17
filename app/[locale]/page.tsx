import {Stack} from "@mui/material";
import Slogan from "@/app/[locale]/_slogan/slogan";
import {unstable_setRequestLocale} from "next-intl/server";
import Tiles from "@/app/[locale]/tiles";
import Erasmus from "@/app/[locale]/_erasmus/erasmus";

export default function Main(params: { locale: string }) {
    unstable_setRequestLocale(params.locale);
    return (
        <Stack className="h-full w-full">
            <section>
                <Slogan/>
            </section>
            <Tiles/>
            <section>
                <Erasmus/>
            </section>
        </Stack>
    );
}