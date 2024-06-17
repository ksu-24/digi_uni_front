import {Stack, Typography} from "@mui/material";
import Text from "@/app/[locale]/_erasmus/text";
import Cards from "@/app/[locale]/_erasmus/cards";
import {getTranslations} from "next-intl/server";
import SectionTitle from "@/app/[locale]/section-title";

export default async function Erasmus() {
    return (
        <Stack className="w-full">
            <Stack className="w-full px-[11%] pt-[10%] h-dvh gap-[6dvh]">
                <SectionTitle number={1} titleTranslationKey="main.about.enumerationCaption" />
                <Text/>
            </Stack>
            <Cards/>
        </Stack>
    )
}