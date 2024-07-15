"use client";

import React from "react";
import {Box, IconButton, Stack} from "@mui/material";
import {KeyboardArrowUp} from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";

function NavButton(
    {
        iconRotation,
        onClick
    }: {
        iconRotation: 90 | 270
        onClick: () => void
    }) {
    return (
        <IconButton className="z-10 bg-secondary hover:bg-info">
            <KeyboardArrowUp sx={{transform: `rotate(${iconRotation}deg)`}} onClick={onClick}/>
        </IconButton>
    )
}

export default function Carousel(
    {
        children,
    }: {
        children: React.ReactNode
    }
) {
    const initialChildren = React.Children.toArray(children);
    const [rightChildrenArray, setRightChildrenArray] = React.useState(React.Children.toArray(initialChildren));
    const [leftChildrenArray, setLeftChildrenArray] = React.useState(React.Children.toArray(initialChildren));
    const windowRef = React.useRef<HTMLDivElement>(null);
    const leftRef = React.useRef<HTMLDivElement>(null);
    const rightRef = React.useRef<HTMLDivElement>(null);
    const [translate, setTranslate] = React.useState(0);

    const expandLeft = () => {
        setLeftChildrenArray(leftChildrenArray.concat(initialChildren));
    }

    const expandRight = () => {
        setRightChildrenArray(rightChildrenArray.concat(initialChildren));
    }

    return (
        <Stack direction="row" className="w-full h-full items-center overflow-x-clip px-4 gap-4">
            <NavButton iconRotation={270} onClick={() => {
                setTranslate(translate + 100);
                if ((leftRef.current?.getBoundingClientRect().left ?? 0) > -window.innerWidth * 3) {
                    expandLeft();
                }
            }}/>
            <Grid container ref={windowRef} className="w-full h-full items-center
            transition-transform duration-700 justify-center gap-4 py-4" columns={2} wrap="nowrap"
                   style={{transform: `translateX(${translate}dvw)`}}>
                <Grid xs={1} component={Box} className="flex justify-end h-full">
                    <Stack ref={leftRef} className="gap-4 justify-end items-center min-w-fit h-full" direction="row">
                        {leftChildrenArray.map((child, index) => (
                                <React.Fragment key={index}>
                                    {child}
                                </React.Fragment>
                            )
                        )}
                    </Stack>
                </Grid>
                <Grid xs={1} component={Box} className="flex justify-start h-full">
                    <Stack ref={rightRef} direction="row" className="gap-4 justify-start items-center min-w-fit h-full">
                        {rightChildrenArray.map((child, index) => (
                                <React.Fragment key={index}>
                                    {child}
                                </React.Fragment>
                            )
                        )}
                    </Stack>
                </Grid>
            </Grid>
            <NavButton iconRotation={90} onClick={() => {
                setTranslate(translate - 100);
                if ((rightRef.current?.getBoundingClientRect().right ?? 0) < window.innerWidth * 3) {
                    expandRight();
                }
            }}/>
        </Stack>
    )
}