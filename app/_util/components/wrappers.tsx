import React, {ReactNode} from "react";
import {Box, Stack, SxProps, Theme} from "@mui/material";
import screens from "@/resources/screens.json";

export function BaseWrapper(
    {
        children,
        component,
        className,
        innerHtml,
        direction = "column",
        withPadding,
        disableGap = false,
        disableBeforeAfter = false,
        disableAfter = false,
        sx,
        bgcolor
    }: {
        children?: React.ReactNode,
        component?: "div" | "form" | "section" | "article" | "aside" | "header" | "footer" | "main" | "nav" | "ul",
        className?: string,
        innerHtml?: string,
        direction?: "row" | "column",
        withPadding?: boolean,
        disableGap?: boolean,
        sx?: SxProps<Theme>,
        bgcolor?: string,
        disableBeforeAfter?: boolean,
        disableAfter?: boolean
    }
) {
    return (
        // if px changed, don't forget to change in defaultPx
        <Stack bgcolor={bgcolor} component={component ?? "div"} className={`${className} w-full h-fit
         ${!disableGap && " max-xs:gap-[20dvw] gap-[12dvw] 2xl:gap-[10dvw] 3xl:gap-[7dvw]"} px-[8dvw]
         max-lg:px-[5dvw]
         xl:px-[10dvw]
         3xl:px-[8.5dvw]
         `} direction={direction} dangerouslySetInnerHTML={innerHtml ? {
            __html: innerHtml
        } : undefined} sx={{
            ...(withPadding && !disableGap && !disableBeforeAfter && {
                "&::before": {
                    content: "''"
                },
                ...(!disableAfter && {
                    "&::after": {
                        content: "''"
                    }
                })
            }),
            ...sx
        }}>
            {children}
        </Stack>
    );
}

export function PageTopWrapper(
    {
        children,
        className,
        bgcolor
    }: {
        children?: React.ReactNode,
        className?: string,
        bgcolor?: string
    }
) {
    return (
        <BaseWrapper bgcolor={bgcolor} className={className + ` 
        max-xs:mb-[18dvw]
        xl:pt-[12dvw] xl:pb-[4dvw]
        3xl:pt-[9dvw] 3xl:pb-[3dvw]
        `} disableGap sx={{
            paddingTop: "13dvw",
            [`@media (max-width: ${screens.xl})`]: {
                paddingTop: "24dvw"
            },
            [`@media (max-width: ${screens.md})`]: {
                paddingTop: "18dvw",
                paddingBottom: "16dvw"
            },
            [`@media (max-width: ${screens.xs})`]: {
                paddingTop: "24dvw",
                paddingBottom: "12dvw"
            },
        }}>
            {children}
        </BaseWrapper>
    );
}

export function HeadingWrapper(
    {
        children,
        className = "",
    }: {
        children?: React.ReactNode,
        className?: string,
    }
) {
    return (
        <Stack className={className + ` gap-6
            max-xs:mt-[10dvw] max-xs:mb-[8dvw]
            xl:gap-[2dvw]
            2xl:gap-[1.5dvw]
            3xl:max-w-[40dvw]
            `}>
            {children}
        </Stack>
    )
}

export function TextWrapper(
    {
        children
    }: {
        children: React.ReactNode
    }
) {
    return (
        <Box
            className="w-[95%]
            xl:w-[88%]
            2x;w-[86%]
            "
        >
            {children}
        </Box>
    )
}

export function ContentWrapper(props: { children: ReactNode, className?: string }) {
    return (
        <Stack className={props.className + ` gap-[5dvw]
        max-xs:!gap-[2.5rem]
        xl:gap-[4dvw]
        3xl:gap-[3dvw]
        `}>
            {props.children}
        </Stack>
    )
}