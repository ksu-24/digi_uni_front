import {getTranslations} from "next-intl/server";
import {Typography} from "@mui/material";
import React from "react";

export async function SectionTitle(
    {
        number,
        titleTranslationKey,
        typographyProps
    }: {
        number: number,
        titleTranslationKey: string,
        typographyProps?: React.ComponentProps<typeof Typography>,
    }
) {
    const translations = await getTranslations();
    return (
        <Typography variant="body1" fontSize={16} {...typographyProps}>{`0${number} ${translations(titleTranslationKey as never)}`}</Typography>
    );
}

