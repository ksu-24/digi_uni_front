import React from "react";
import {Stack} from "@mui/material";

export const defaultGap = "gap-[6dvh]";

export function DefaultContainer(
    {
        children,
        component,
        className,
        innerHtml
    }: {
        children?: React.ReactNode,
        component?: "div" | "form" | "section" | "article" | "aside" | "header" | "footer" | "main" | "nav",
        className?: string,
        innerHtml?: string
    }
) {
    return (
        <Stack component={component ?? "div"} className={`${className} w-full px-[11%] ${defaultGap}`} dangerouslySetInnerHTML={innerHtml ? {
            __html: innerHtml
        } : undefined}>
            {children}
        </Stack>
    );
}