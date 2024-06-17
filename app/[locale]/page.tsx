import {Stack} from "@mui/material";
import Slogan from "@/app/[locale]/_slogan/slogan";
import {unstable_setRequestLocale} from "next-intl/server";
import Tiles from "@/app/[locale]/tiles";
import Erasmus from "@/app/[locale]/_erasmus/erasmus";
import Mission from "@/app/[locale]/_mission/mission";

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
            <section>
                <Mission/>
            </section>
        </Stack>
    );
}