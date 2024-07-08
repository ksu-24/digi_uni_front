import React from "react";
import {Stack} from "@mui/material";

export const defaultGap = "gap-[6dvh]";

export const defaultPx = "11dvw"; // if changed, don't forget to change in DefaultContainer className

export function DefaultContainer(
    {
        children,
        component,
        className,
        innerHtml,
        direction = "column"
    }: {
        children?: React.ReactNode,
        component?: "div" | "form" | "section" | "article" | "aside" | "header" | "footer" | "main" | "nav",
        className?: string,
        innerHtml?: string,
        direction?: "row" | "column"
    }
) {
    return (
        // if px changed, don't forget to change in defaultPx
        <Stack component={component ?? "div"} className={`${className} w-full px-[11dvw] h-fit ${defaultGap}`} direction={direction} dangerouslySetInnerHTML={innerHtml ? {
            __html: innerHtml
        } : undefined}>
            {children}
        </Stack>
    );
}