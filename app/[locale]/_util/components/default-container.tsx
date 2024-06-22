import React from "react";
import {Stack} from "@mui/material";

export const defaultGap = "gap-[6dvh]";

export function DefaultContainer(
    {
        children,
        classes
    }: {
        children?: React.ReactNode,
        classes?: string
    }
) {
    return (
        <Stack className={`${classes} w-full px-[11%] ${defaultGap}`}>
            {children}
        </Stack>
    );
}