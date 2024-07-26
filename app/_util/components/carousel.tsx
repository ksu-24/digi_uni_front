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
        <Stack direction="row" className="h-full items-center px-4 gap-10 animate-scroll-right-half">
            {initialChildren.map((child, index) => (
                    <React.Fragment key={index}>
                        {child}
                    </React.Fragment>
                )
            )}
        </Stack>
    )
}