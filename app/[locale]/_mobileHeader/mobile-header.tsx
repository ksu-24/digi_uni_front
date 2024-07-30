"use client"

import {Box, Stack} from "@mui/material";
import logo from "@/public/images/commons/digiuni.svg"
import bwLogo from "@/public/images/header/digiuni-bw.svg"
import React from "react";
import LanguageToggle from "@/app/_util/components/language-toggle";
import {Menu} from "@/app/[locale]/_mobileHeader/mobile-menu";
import useWindow from "@/app/_util/use-window";
import screens from "@/resources/screens.json";
import Image from "next/image";

export default function MobileHeader() {
    const [open, setOpen] = React.useState(false);
    const windowWidth = useWindow().innerWidth;
    const bwCondition = windowWidth < parseInt(screens.md) && open;
    return (
        <Box className="fixed md:hidden w-full z-[1500] px-[4.5dvw] py-[3.5dvw]
        max-xs:!pt-[7dvw]
        max-md:px-[5dvw] max-md:pt-[4dvw]"
             component="header">
            <Stack direction="row" className="justify-between items-center">
                <Box className="relative flex items-center w-[19dvw]" sx={{
                    "& > img": {
                        transitionDelay: "0.1s",
                        height: "auto !important",
                        position: "absolute",
                        transform: "translateY(-50%)",
                    },
                    [`@media (min-width: ${screens.lg})`]: {
                        width: "21dvw"
                    },
                    [`@media (max-width: ${screens.lg})`]: {
                        width: "24dvw"
                    },
                    [`@media (max-width: ${screens.md})`]: {
                        width: "26dvw !important"
                    },
                    [`@media (max-width: ${screens.xs})`]: {
                        width: "40dvw !important"
                    }
                }}>
                    <Image src={logo} alt="logo" fill style={{
                        opacity: bwCondition ? 0 : 1
                    }} className="transition-[opacity]"/>
                    <Image src={bwLogo} alt="logo" fill style={{
                        opacity: bwCondition ? 1 : 0
                    }} className="transition-[opacity]"/>
                </Box>
                <Stack direction="row" className="items-center
                max-md:gap-[6dvw]
                ">
                    <LanguageToggle color={open ? "white" : undefined}/>
                    <Menu open={open} setOpen={setOpen}/>
                </Stack>
            </Stack>
        </Box>
    )
}