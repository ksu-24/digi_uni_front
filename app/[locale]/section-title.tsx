import {getTranslations} from "next-intl/server";
import {Typography} from "@mui/material";

export default async function SectionTitle(
    {
        number,
        titleTranslationKey,
    } : {
        number: number,
        titleTranslationKey: string
    }
) {
    const translations = await getTranslations();
    return (
        <Typography variant="body1">{`0${number} ${translations(titleTranslationKey as never)}`}</Typography>
    );
}