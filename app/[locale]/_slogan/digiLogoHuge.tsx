"use client"

import EnterAnimation from "@/app/_util/components/enter-animation";
import {Box} from "@mui/material";
import verticalLogo from "@/public/images/main/slogan/digiuni-vertical.png";
import React, {useEffect} from "react";

export function DigiLogoHuge() {
    const [loaded, setLoaded] = React.useState(false);
    const imgRef = React.useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (imgRef.current?.complete) {
            setLoaded(true);
        }
    }, [imgRef.current]);

    return (
        <EnterAnimation direction="right" className="h-full min-h-full shrink-0 hidden lg:block"
                        loaded={loaded}>
            <Box className="h-full min-h-full relative">
                <img ref={imgRef} src={verticalLogo.src} alt="Digiuni" height="100%"
                     onLoad={() => setLoaded(true)} className="!w-auto !h-full"/>
            </Box>
        </EnterAnimation>
    );
}