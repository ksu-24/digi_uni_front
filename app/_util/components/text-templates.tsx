import screens from "@/resources/screens.json";
import {Stack, Typography} from "@mui/material";
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
        <Stack direction="row" className="gap-6">
            <Typography variant="body1"
                        fontSize={16} {...typographyProps}>
                0{number}
            </Typography>
            <Stack direction="row" className="gap-2 items-center">

                <img src="/images/commons/hr.svg" alt="" className="w-12 h-px bg-[#2f2f35] border-0"/>
                <Typography variant="body1"
                            fontSize={16} {...typographyProps}>
                    {`${translations(titleTranslationKey as never)}`}
                </Typography>
            </Stack>
        </Stack>
    );
}

export function SectionHeading(props: { children: React.ReactNode, className?: string }) {
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
    }} className={props.className + ` max-lg:!leading-[1.2] max-w-[50dvw]
    max-xs:!max-w-[88dvw]
    max-lg:!max-w-[76dvw]
    xl:max-w-[53dvw]
    3xl:max-w-[48dvw]
    `}>
        {props.children}
    </Typography>;
}