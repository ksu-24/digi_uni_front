import {Box, Stack} from "@mui/material";
import Image from "next/image";
import Main from "@/app/[locale]/_slogan/main";
import ellipse from "@/public/images/main/slogan/ellipse.png";
import {DigiLogoHuge} from "@/app/[locale]/_slogan/digiLogoHuge";
import Header from "@/app/[locale]/(with-header)/header";

export default async function Slogan() {
    return (
        <Stack className="w-full h-dvh min-h-dvh items-center py-[6dvh] xs:pr-[2dvw] relative overflow-hidden"
               direction="row" bgcolor="secondary.main">
            <DigiLogoHuge/>
            <Stack className="w-full h-full shrink-[2]">
                <Header disableImage className="!px-[3dvw] !py-0 !justify-end"/>
                <Main/>
                <Box></Box>
            </Stack>
            <Box className="absolute w-dvw h-dvh scale-125 translate-x-1/2 pointer-events-none">
                <Image src={ellipse} alt="Ellipse" fill className="object-contain pointer-events-none"/>
            </Box>
        </Stack>
    );
}

