import {Box, Stack} from "@mui/material";
import Image from "next/image";
import uaPartners from "@/public/images/main/slogan/ua-partners.png";
import euPartners from "@/public/images/main/slogan/eu-partners.png";
import digiuniLoading from "@/public/images/main/slogan/digiuni-loading.png";
import EnterAnimation from "@/app/_util/components/enter-animation";

function Folders() {
    return (
        <Stack direction="row" className="w-1/2 h-fit gap-[15%] justify-center">
            <EnterAnimation direction="up" className="w-[75px] h-[66px]" fadeDuration={300} delay={700} duration={500}>
                <Box className="relative w-full h-full">
                    <Image src={uaPartners} alt="UA partners" fill style={{
                        objectFit: "contain"
                    }}/>
                </Box>
            </EnterAnimation>
            <EnterAnimation direction="up" className="w-[75px] h-[66px]" fadeDuration={300} delay={900} duration={500}>
                <Box className="w-[75px] h-[66px] relative">
                    <Image src={euPartners} alt="EU partners" fill style={{
                        objectFit: "contain"
                    }}/>
                </Box>
            </EnterAnimation>
        </Stack>
    )
}

export function DigiuniLoading() {
    return (
        <Stack
            className="h-[90%] items-center justify-center gap-[9%] mb-[2%] w-0 xs:w-1/5 xl:w-2/5 shrink-0 opacity-0 xl:opacity-100">
            <Folders/>
            <EnterAnimation offset={0} duration={600} delay={200} fadeDuration={400} direction="up" grow
                            className="w-4/5 h-1/3">
                <Box className="relative w-full h-full">
                    <Image src={digiuniLoading} alt="Digiuni Loading" fill style={{
                        objectFit: "contain"
                    }}/>
                </Box>
            </EnterAnimation>
        </Stack>
    )
}