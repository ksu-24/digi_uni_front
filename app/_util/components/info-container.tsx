import React, {CSSProperties} from "react";
import {BoxProps, Stack, StackProps, SxProps, Theme} from "@mui/material";
import {BaseWrapper} from "@/app/_util/components/wrappers";
import colors from "@/resources/colors.json";
import screens from "@/resources/screens.json";

const cardsContainerBorders: CSSProperties = {
    border: `1px solid ${colors.info.main}`,
    borderCollapse: "collapse"
}

export function InfoContainer(
    {
        children,
        boxProps = {},
        stackProps = {},
        disablePy = false
    }: {
        children: React.ReactNode,
        boxProps?: BoxProps,
        stackProps?: StackProps,
        disablePy?: boolean
    }
) {
    return (
        <>
            {/* @ts-ignore */}
            <BaseWrapper sx={{
                ...cardsContainerBorders,
                borderLeft: 0,
                borderRight: 0
            }} {...boxProps} className={`${boxProps.className ?? ""} flex border-collapse my-[7dvw]
            max-xs:!border-none max-xs:!px-0
            xl:my-[6dvw]
            3xl:my-[3dvw]
            `}>
                { /* @ts-ignore */}
                <Stack {...stackProps} sx={{
                    ...cardsContainerBorders,
                    [`@media (max-width: ${screens.xs})`]: {
                        "& > *:last-child": {
                            borderBottom: 'none !important',
                            paddingBottom: "0 !important"
                        }
                    },
                    ...stackProps.sx
                }} className={`${stackProps.className ?? ''} 
                justify-center border-collapse gap-[2dvw] px-[3dvw]
                max-xs:!border-none  max-xs:gap-[11dvw]
                max-lg:px-[5dvw] max-lg:gap-[3dvw]
                2xl:gap-[1.5dvw]
                3xl:pl-[2dvw] 3xl:gap-[1.2dvw]
                ` + (disablePy ? '' : 'py-[4dvw] max-xs:!py-[16dvw] max-lg:py-[5dvw] 2xl:py-[3dvw] 3xl:py-[2dvw]')}
                       component="ul">
                    {children}
                </Stack>
            </BaseWrapper>
        </>
    );
}

export function InfoContainerItem(
    {
        children,
        className = '',
        sx = {}
    }: {
        children: React.ReactNode,
        className?: string,
        sx?: SxProps<Theme>
    }
) {
    return (
        <Stack className={`${className} w-full border-collapse -my-px !border-x-0`} style={{
            ...cardsContainerBorders
        }} component="li" sx={sx}>
            {children}
        </Stack>
    )
}