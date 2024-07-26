"use client"

import {Box, Stack} from "@mui/material";
import logo from "@/public/images/header/digiuni.svg"
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
    const bwCondition = windowWidth < parseInt(screens.xs) && open;
    return (
        <Box className="fixed lg:hidden w-full z-[1500] px-[4.5dvw] py-[3.5dvw]" component="header">
            <Stack direction="row" className="justify-between items-center">
                <Box className="relative flex items-center" sx={{
                    "& > img": {
                        width: "100%",
                        height: "auto",
                        position: "absolute",
                        transitionDelay: "0.1s",
                    },
                    [`@media (max-width: ${screens.xs})`]: {
                        width: "38dvw"
                    },
                    [`@media (min-width: ${screens.lg})`]: {
                        width: "21dvw"
                    },
                    width: "16dvw"
                }}>
                    <Image src={logo} alt="logo" style={{
                        opacity: bwCondition ? 0 : 1
                    }} className="transition-[opacity]"/>
                    <Image src={bwLogo} alt="logo" style={{
                        opacity: bwCondition ? 1 : 0
                    }} className="transition-[opacity]"/>
                </Box>
                <Stack direction="row" className="items-center">
                    <LanguageToggle color={open ? "white" : undefined}/>
                    <Menu open={open} setOpen={setOpen}/>
                </Stack>
            </Stack>
        </Box>
    )
}