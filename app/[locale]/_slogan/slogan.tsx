import {Box, Stack} from "@mui/material";
import Image from "next/image";
import verticalLogo from "@/public/images/main/digiuni-vertical.png";
import Header from "@/app/[locale]/_slogan/header";
import Main from "@/app/[locale]/_slogan/main";
import ellipse from "@/public/images/main/ellipse.png";

export default async function Slogan() {
    return (
        <Stack className="w-full h-dvh min-h-dvh items-center py-[6dvh] pr-[2dvw] relative overflow-hidden"
               direction="row" bgcolor="secondary.main">
            <Box className="py-[1dvh] h-full w-1/5 sm:w-1/6 md:w-[15%] shrink-[0.5]">
                <Box className="h-full w-full relative">
                    <Image src={verticalLogo} alt="Digiuni" fill style={{
                        objectFit: "contain"
                    }}/>
                </Box>
            </Box>
            <Stack className="w-full h-full shrink-[2]">
                <Header/>
                <Main/>
                <Box></Box>
            </Stack>
            <Box className="absolute w-dvw h-dvh scale-125 translate-x-1/2">
                <Image src={ellipse} alt="Ellipse" fill style={{
                    objectFit: "contain"
                }}/>
            </Box>
        </Stack>
    );
}

