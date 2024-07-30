"use client";

import React from "react";
import {Stack} from "@mui/material";


export default function Carousel(
    {
        children,
    }: {
        children: React.ReactNode
    }
) {
    const initialChildren = React.Children.toArray(children).concat(React.Children.toArray(children));

    return (
        <Stack direction="row" className="h-full items-center gap-[70px] min-w-full shrink-0
        animate-scroll-right-xs justify-start !inline-flex flex-nowrap
        xs:animate-scroll-right-half
        max-lg:gap-[50px]
        ">
            {initialChildren.map((child, index) => (
                    <React.Fragment key={index}>
                        {child}
                    </React.Fragment>
                )
            )}
        </Stack>
    )
}