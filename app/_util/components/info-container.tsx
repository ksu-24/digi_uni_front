import React, {CSSProperties} from "react";
import {BoxProps, Stack, StackProps, SxProps, Theme} from "@mui/material";
import {BaseWrapper} from "@/app/_util/components/wrappers";
import colors from "@/resources/colors.json";

const cardsContainerBorders: CSSProperties = {
    border: `1px solid ${colors.info.main}`,
    borderCollapse: "collapse"
}

export function InfoContainer(
    {
        children,
        boxProps = {},
        stackProps = {},
    }: {
        children: React.ReactNode,
        boxProps?: BoxProps,
        stackProps?: StackProps,
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
                <Stack sx={{
                    ...cardsContainerBorders
                }} {...stackProps} className={`${stackProps.className ?? ''} 
                justify-center border-collapse py-[4dvw] gap-[2dvw] p-[3dvw]
                max-xs:!border-none max-xs:!py-[16dvw] max-xs:gap-[11dvw]
                max-lg:p-[5dvw] max-lg:gap-[3dvw]
                2xl:py-[3dvw] 2xl:gap-[1.5dvw]
                3xl:py-[2dvw] 3xl:pl-[2dvw] 3xl:gap-[1.2dvw]
                `}
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