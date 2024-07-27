import {Box, Stack} from "@mui/material";
import Image from "next/image";
import uaPartners from "@/public/images/main/slogan/ua-partners.png";
import euPartners from "@/public/images/main/slogan/eu-partners.png";
import digiuniLoading from "@/public/images/main/slogan/digiuni-loading.png";
import EnterAnimation from "@/app/_util/components/enter-animation";

function Folders() {
    return (
        <Stack direction="row" className="w-full justify-center
        xl:gap-[3dvw]
        3xl:gap-[2dvw]
        ">
            <EnterAnimation direction="up" className="xl:w-[5dvw] 3xl:w-[3.5dvw]" fadeDuration={300} delay={700} duration={500}>
                <Box className="relative w-full h-full">
                    <img src={uaPartners.src} alt="UA partners" width="100%"/>
                </Box>
            </EnterAnimation>
            <EnterAnimation direction="up" className="xl:w-[5dvw] 3xl:w-[3.5dvw]" fadeDuration={300} delay={900} duration={500}>
                <Box className="w-full h-full relative">
                    <img src={euPartners.src} alt="EU partners" width="100%"/>
                </Box>
            </EnterAnimation>
        </Stack>
    )
}

export function DigiuniLoading() {
    return (
        <Stack
            className="hidden h-[90%] justify-center gap-[2dvw] grow-0 z-50
            xl:flex
            3xl:gap-[1.5dvw]
            ">
            <Folders/>
            <EnterAnimation offset={0} duration={600} delay={200} fadeDuration={400} direction="up" grow>
                <img src={digiuniLoading.src} alt="Digiuni Loading" className="w-[23dvw] 3xl:w-[18dvw]"/>
            </EnterAnimation>
        </Stack>
    )
}