import {Box, Fade} from "@mui/material";
import React from "react";

export default function EnterAnimation(
    {
        direction,
        children,
        className = "",
        loaded = true,
        offset = 30,
        duration = 600,
        delay = 0,
        grow = false,
        fadeDuration,
        fadeDelay
    }: {
        direction: "left" | "right" | "up" | "down",
        children: React.ReactElement,
        className?: string,
        loaded?: boolean,
        offset?: number,
        duration?: number,
        delay?: number,
        grow?: boolean,
        fadeDuration?: number
        fadeDelay?: number
    }
) {
    const animationClassname = {
        left: "animate-slide-left",
        right: "animate-slide-right",
        up: "animate-slide-up",
        down: "animate-slide-down"
    }[direction]

    return (
        <>
            {
                loaded && (
                    <Box className={animationClassname + ` translate-${offset} ` + className} style={{
                        animationDuration: `${duration}ms`,
                        animationDelay: `${delay}ms`
                    }}>
                        <Box className={"w-full h-full " + (grow ? "animate-grow" : "")}>
                            <Fade in={true} timeout={fadeDuration ?? duration} easing="ease-out" style={{
                                transitionDelay: `${fadeDelay ?? delay}ms`
                            }}>
                                {children}
                            </Fade>
                        </Box>
                    </Box>
                )
            }
            {
                !loaded && <Box className={className + " invisible"}>
                    {children}
                </Box>
            }
        </>
    )
}