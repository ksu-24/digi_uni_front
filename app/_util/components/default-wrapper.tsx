import React from "react";
import {Stack, SxProps, Theme} from "@mui/material";

export const defaultPx = "11dvw";


export function DefaultWrapper(
    {
        children,
        component,
        className,
        innerHtml,
        direction = "column",
        withPadding,
        disableGap = false,
        sx,
        bgcolor
    }: {
        children?: React.ReactNode,
        component?: "div" | "form" | "section" | "article" | "aside" | "header" | "footer" | "main" | "nav",
        className?: string,
        innerHtml?: string,
        direction?: "row" | "column",
        withPadding?: boolean,
        disableGap?: boolean,
        sx?: SxProps<Theme>,
        bgcolor?: string
    }
) {
    return (
        // if px changed, don't forget to change in defaultPx
        <Stack bgcolor={bgcolor} component={component ?? "div"} className={`${className} w-full h-fit
         ${!disableGap && " gap-[12dvw] xl:gap-[10dvw] 3xl:gap-[7dvw]"} px-[8dvw]
         max-xs:mt-[12dvw] max-xs:mb-[18dvw]
         max-lg:px-[5dvw]
         xl:px-[10dvw]
         3xl:px-[8.5dvw]
         `} direction={direction} dangerouslySetInnerHTML={innerHtml ? {
            __html: innerHtml
        } : undefined} sx={{
            ...(withPadding && !disableGap && {
                "&::before, &::after": {
                    content: "''"
                }
            }),
            ...sx
        }}>
            {children}
        </Stack>
    );
}