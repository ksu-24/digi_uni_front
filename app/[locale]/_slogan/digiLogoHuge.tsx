"use client"

import EnterAnimation from "@/app/_util/components/enter-animation";
import {Box} from "@mui/material";
import Image from "next/image";
import verticalLogo from "@/public/images/main/slogan/digiuni-vertical.png";
import React from "react";

export function DigiLogoHuge() {
    const [loaded, setLoaded] = React.useState(false);

    return <EnterAnimation direction="right" className="h-full w-1/5 md:w-[15%] sm:w-1/6 shrink-[0.5] hidden lg:block" loaded={loaded}>
        <Box className="py-[1dvh] w-full h-full">
            <Box className="h-full w-full relative">
                <Image src={verticalLogo} alt="Digiuni" fill style={{
                    objectFit: "contain"
                }} onLoad={() => setLoaded(true)}/>
            </Box>
        </Box>
    </EnterAnimation>;
}