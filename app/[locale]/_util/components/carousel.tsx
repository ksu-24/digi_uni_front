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
               className={`w-full h-full items-center ${props.translateClass}`}
               ref={props.ref1}>
            {props.children}
        </Stack>
    );
}

let key = -Number.MAX_VALUE;

export default function Carousel(
    {
        children,
        window
    }: {
        children: React.ReactNode,
        window: number
    }
) {
    let childrenArray = React.Children.toArray(children);

    if (childrenArray.length < window * 2 - 1) {
        childrenArray = childrenArray.concat(childrenArray);
    }

    const [visibleIndexesBounds, setVisibleIndexesBounds] = React.useState([0, window]);
    const [prevVisible, setPrevVisible] = React.useState(null as React.ReactNode[] | null);
    const visibleIndexes = [] as number[];
    const windowRef = React.useRef<HTMLDivElement | null>(null);
    const prevWindowRef = React.useRef<HTMLDivElement | null>(null);
    const [currentWindowAnimation, setCurrentWindowAnimation] = React.useState("");

    for (let i = visibleIndexesBounds[0]; visibleIndexes.length < window; i++) {
        visibleIndexes.push(i % childrenArray.length)
        if (i === childrenArray.length - 1) {
            i = -1;
        }
    }

    function subtractCyclic(value: number, window: number, inclusive = false) {
        const result = (value - window + childrenArray.length) % (childrenArray.length);
        if (inclusive && result === 0) {
            return childrenArray.length;
        }
        return result;
    }

    useEffect(() => {
        const prevWindow = prevWindowRef.current;
        setTimeout(() => {
            prevWindow?.classList.add("hidden");
            setCurrentWindowAnimation("");
        }, 700);
    }, [visibleIndexesBounds]);

    console.log(visibleIndexes)
    console.log(visibleIndexesBounds)

    return (
        <Stack direction="row" className="w-full h-full items-center overflow-x-clip">
            <NavButton iconRotation={270} onClick={() => {
                setCurrentWindowAnimation("animate-slide-in-left");
                setVisibleIndexesBounds([subtractCyclic(visibleIndexesBounds[0], window),
                    visibleIndexesBounds[0] === 0 ? childrenArray.length : visibleIndexesBounds[0]]);
                setPrevVisible(visibleIndexes.map((index) => childrenArray[index]))
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
                setCurrentWindowAnimation("animate-slide-in-right");
                setVisibleIndexesBounds([visibleIndexesBounds[1] % childrenArray.length, subtractCyclic(visibleIndexesBounds[1], -window, true)])
                setPrevVisible(visibleIndexes.map((index) => childrenArray[index]))
            }}/>
        </Stack>
    )
}