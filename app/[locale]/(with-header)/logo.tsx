"use client"

import useWindow from "@/app/_util/use-window";
import screens from "@/resources/screens.json";
import digiuniLogo from "@/public/images/header/digiuni.svg";
import {Box} from "@mui/material";
import EnterAnimation from "@/app/_util/components/enter-animation";

export function Logo() {
    const windowWidth = useWindow().innerWidth;
    return (
        <EnterAnimation direction="right" offset={20} duration={500} className="w-fit h-fit">
            <Box className="w-fit h-fit">
                <img src="/images/header/digiuni.svg" alt="DigiUni" width="0" height="0"/>
                <img src="/images/header/digiuni-vertical.png" alt="DigiUni" width="0" height="0"/>
                {
                    !windowWidth || windowWidth > parseInt(screens.md)
                        ? <img src="/images/header/digiuni.svg" alt="DigiUni"/>
                        : <img src="/images/header/digiuni-vertical.png" alt="DigiUni" style={{
                            height: digiuniLogo.width + "px",
                            width: "auto"
                        }}/>
                }
            </Box>
        </EnterAnimation>
    );
}