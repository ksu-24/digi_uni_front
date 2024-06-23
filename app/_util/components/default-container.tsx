import React from "react";
import {Stack} from "@mui/material";

export const defaultGap = "gap-[6dvh]";

export function DefaultContainer(
    {
        children,
        component,
        className
    }: {
        children?: React.ReactNode,
        component?: "div" | "form" | "section" | "article" | "aside" | "header" | "footer" | "main" | "nav",
        className?: string
    }
) {
    return (
        <Stack component={component ?? "div"} className={`${className} w-full px-[11%] ${defaultGap}`}>
            {children}
        </Stack>
    );
}