import screens from "@/resources/screens.json";
import {Typography} from "@mui/material";
import React from "react";
import {getTranslations} from "next-intl/server";

export function MainHeading(
    {
        children,
    }: {
        children?: React.ReactNode,
    }
) {
    return (
        <Typography
            variant="h1"
            className="flex-grow-0 w-fit xl:text-[50px] 2xl:text-[54px] 3xl:text-[56px]"
            letterSpacing={"-0.01rem"}
            sx={{
                '&': {
                    fontSize: 52,
                },
                [`@media (max-width: ${screens.lg})`]: {
                    fontSize: 50
                },
                [`@media (max-width: ${screens.md})`]: {
                    fontSize: 38
                }
            }}>
            {children}
        </Typography>
    );
}

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
        <Typography variant="body1"
                    fontSize={16} {...typographyProps}>{`0${number} ${translations(titleTranslationKey as never)}`}</Typography>
    );
}

export function SectionHeading(props: { children: React.ReactNode }) {
    return <Typography variant="h2" lineHeight={1.3} sx={{
        "&": {
            fontSize: "38px",
        },
        [`@media (max-width: ${screens.lg})`]: {
            "&": {
                fontSize: "34px"
            }
        },
        [`@media (max-width: ${screens.md})`]: {
            "&": {
                fontSize: "32px"
            }
        },
        [`@media (max-width: ${screens.xs})`]: {
            "&": {
                fontSize: "30px"
            }
        }
    }}>
        {props.children}
    </Typography>;
}