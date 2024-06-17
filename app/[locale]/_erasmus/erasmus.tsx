import {Stack, Typography} from "@mui/material";
import Text from "@/app/[locale]/_erasmus/text";
import Cards from "@/app/[locale]/_erasmus/cards";
import {getTranslations} from "next-intl/server";

export default async function Erasmus() {
    const translations = await getTranslations("main.about");
    return (
        <Stack className="w-full">
            <Stack className="w-full px-[11%] pt-[10%] h-dvh gap-[6dvh]">
                <Typography variant="body1">01 {translations("enumerationCaption")}</Typography>
                <Text/>
            </Stack>
            <Cards/>
        </Stack>
    )
}