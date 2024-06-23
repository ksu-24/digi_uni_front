import {getTranslations} from "next-intl/server";
import {Typography} from "@mui/material";
import React from "react";

export async function SectionTitle(
    {
        number,
        titleTranslationKey,
    }: {
        number: number,
        titleTranslationKey: string
    }
) {
    const translations = await getTranslations();
    return (
        <Typography variant="body1">{`0${number} ${translations(titleTranslationKey as never)}`}</Typography>
    );
}

