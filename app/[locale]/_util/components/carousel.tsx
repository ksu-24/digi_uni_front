"use client";

import React, {useEffect} from "react";
import {IconButton, Stack} from "@mui/material";
import {KeyboardArrowUp} from "@mui/icons-material";

function NavButton(
    {
        iconRotation,
        onClick
    }: {
        iconRotation: 90 | 270
        onClick: () => void
    }) {
    return (
        <IconButton>
            <KeyboardArrowUp sx={{transform: `rotate(${iconRotation}deg)`}} onClick={onClick}/>
        </IconButton>
    )
}

function WindowContainer(props: {
    translateClass: string,
    ref1: React.MutableRefObject<HTMLDivElement | null>,
    children?: React.ReactNode,
}) {
    return (
        <Stack direction="row"
               className={`w-full h-full items-center ${props.translateClass} gap-10 p-2 justify-center`}
               ref={props.ref1}>
            {props.children}
        </Stack>
    );
}

let key = -Number.MAX_VALUE;

export default function Carousel(
    {
        children,
        windowSizes
    }: {
        children: React.ReactNode,
        windowSizes: { breakpoint: { max: number, min: number }, items: number }[]
    }
) {
    let childrenArray = React.Children.toArray(children);
    const [windowSize, setWindowSize] = React.useState(windowSizes[windowSizes.length-1].items);
    const firstRenderCallback = React.useRef<() => void>(() => {});


    useEffect(() => {
        setWindowSize(windowSizes.find((size) =>
            window.innerWidth <= size.breakpoint.max && window.innerWidth >= size.breakpoint.min)?.items
            || windowSizes[windowSizes.length-1].items);
    }, []);

    useEffect(() => {
        firstRenderCallback.current();
    }, [firstRenderCallback.current]);

    if (childrenArray.length < windowSize * 2 - 1) {
        childrenArray = childrenArray.concat(childrenArray);
    }

    const [visibleIndexesBounds, setVisibleIndexesBounds] = React.useState([0, windowSize]);
    const [prevVisible, setPrevVisible] = React.useState(null as React.ReactNode[] | null);
    const visibleIndexes = [] as number[];
    const windowRef = React.useRef<HTMLDivElement | null>(null);
    const prevWindowRef = React.useRef<HTMLDivElement | null>(null);
    const [currentWindowAnimation, setCurrentWindowAnimation] = React.useState("");

    for (let i = visibleIndexesBounds[0]; visibleIndexes.length < windowSize; i++) {
        visibleIndexes.push(i % childrenArray.length)
        if (i === childrenArray.length - 1) {
            i = -1;
        }
    }

    function subtractCyclic(value: number, windowSize: number, inclusive = false) {
        const result = (value - windowSize + childrenArray.length) % (childrenArray.length);
        if (inclusive && result === 0) {
            return childrenArray.length;
        }
        return result;
    }

    const timeoutRef = React.useRef<any | null>(null);

    useEffect(() => {
        const prevWindow = prevWindowRef.current;
        timeoutRef.current = setTimeout(() => {
            setCurrentWindowAnimation("");
        }, 700);
    }, [visibleIndexesBounds]);

    return (
        <Stack direction="row" className="w-full h-full items-center overflow-x-clip justify-center">
            <NavButton iconRotation={270} onClick={() => {
                firstRenderCallback.current = () => {
                    setCurrentWindowAnimation("animate-slide-in-left");
                    setVisibleIndexesBounds([visibleIndexesBounds[1] % childrenArray.length, subtractCyclic(visibleIndexesBounds[1], -windowSize, true)])
                    setPrevVisible(visibleIndexes.map((index) => childrenArray[index]))
                }
                clearTimeout(timeoutRef.current);
                setCurrentWindowAnimation(currentWindowAnimation === "" ? "a" : "");
            }}/>
            {prevVisible && currentWindowAnimation === "animate-slide-in-right" &&
                <WindowContainer translateClass={"animate-slide-out-left"} ref1={prevWindowRef} key={key++}>
                    {prevVisible}
                </WindowContainer>
            }
            <WindowContainer translateClass={currentWindowAnimation} ref1={windowRef}>
                {
                    visibleIndexes.map((index) => {
                        return (
                            <React.Fragment key={index}>
                                {childrenArray[index]}
                            </React.Fragment>
                        )
                    })
                }
            </WindowContainer>
            {prevVisible && currentWindowAnimation === "animate-slide-in-left" &&
                <WindowContainer translateClass={"animate-slide-out-right"} ref1={prevWindowRef} key={key++}>
                    {prevVisible}
                </WindowContainer>
            }
            <NavButton iconRotation={90} onClick={() => {
                firstRenderCallback.current = () => {
                    setCurrentWindowAnimation("animate-slide-in-right");
                    setVisibleIndexesBounds([visibleIndexesBounds[1] % childrenArray.length, subtractCyclic(visibleIndexesBounds[1], -windowSize, true)])
                    setPrevVisible(visibleIndexes.map((index) => childrenArray[index]))
                }
                clearTimeout(timeoutRef.current);
                setCurrentWindowAnimation(currentWindowAnimation === "" ? "a" : "");
            }}/>
        </Stack>
    )
}