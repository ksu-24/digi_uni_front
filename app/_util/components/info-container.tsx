import React, {CSSProperties} from "react";
import {Box, BoxProps, Stack, StackProps} from "@mui/material";
import {defaultPx} from "@/app/_util/components/default-wrapper";
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
    }: {
        children: React.ReactNode,
        boxProps?: BoxProps,
        stackProps?: StackProps,
    }
) {
    return <Box style={{
        ...cardsContainerBorders,
        borderLeft: 0,
        borderRight: 0
    }} {...boxProps} className={`${boxProps.className} flex border-collapse`}>
        { /* @ts-ignore */}
        <Stack sx={{
            ...cardsContainerBorders,
            [`@media (min-width: ${screens.md})`]: {
                "&.MuiStack-root": {
                    marginLeft: defaultPx,
                    marginRight: defaultPx
                }
            }
        }} {...stackProps} className={`${stackProps.className ?? ''} justify-center border-collapse`} component="ul">
            {children}
        </Stack>
    </Box>;
}

export function InfoContainerItem(
    {
        children,
        className = ''
    }: {
        children: React.ReactNode,
        className?: string
    }
) {
    return (
        <Stack className={`${className} w-full border-collapse`} style={{
            ...cardsContainerBorders
        }} component="li">
            {children}
        </Stack>
    )
}