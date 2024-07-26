import React from "react";
import {Stack} from "@mui/material";
import screens from "@/resources/screens.json";

const defaultGapClass = "gap-[6dvh]";

export const defaultPx = "11dvw";

const defaultPtClass = "pt-[17dvh]";

export function DefaultContainer(
    {
        children,
        component,
        className,
        innerHtml,
        direction = "column",
        withTopPadding = false
    }: {
        children?: React.ReactNode,
        component?: "div" | "form" | "section" | "article" | "aside" | "header" | "footer" | "main" | "nav",
        className?: string,
        innerHtml?: string,
        direction?: "row" | "column",
        withTopPadding?: boolean
    }
) {
    return (
        // if px changed, don't forget to change in defaultPx
        <Stack component={component ?? "div"} className={`${className} w-full h-fit ${defaultGapClass} ${withTopPadding ? defaultPtClass : ''}`} direction={direction} dangerouslySetInnerHTML={innerHtml ? {
            __html: innerHtml
        } : undefined} sx={{
            [`@media (max-width: ${screens.lg})`]: {
                padding: "0 5vw"
            },
            paddingRight: defaultPx,
            paddingLeft: defaultPx
        }}>
            {children}
        </Stack>
    );
}