import {getTranslations} from "next-intl/server";
import {Stack, Typography} from "@mui/material";

export default async function Text() {
    const translations = await getTranslations("main.about");
    return (
        <Stack className="w-full h-dvh px-[11%] pt-[10%]">
            <Typography variant="body1">01 {translations("enumerationCaption")}</Typography>
            <Typography variant="h3" className="w-3/5">{translations("title")}</Typography>
            <Typography variant="body2" className="whitespace-pre-wrap">{translations("content")}</Typography>
        </Stack>
    );
}