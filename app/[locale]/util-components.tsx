import {getTranslations} from "next-intl/server";
import {Stack, Typography} from "@mui/material";
import React from "react";

export async function SectionTitle(
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

export function TextContainer(
    {
        children,
        classes
    } : {
        children: React.ReactNode,
        classes?: string
    }
) {
    return (
        <Stack className={classes + " w-full px-[11%] gap-[6dvh]"}>
            {children}
        </Stack>
    );
}