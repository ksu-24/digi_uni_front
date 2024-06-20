import {Box, Stack} from "@mui/material";
import Image from "next/image";
import uaPartners from "@/public/images/main/slogan/ua-partners.png";
import euPartners from "@/public/images/main/slogan/eu-partners.png";
import digiuniLoading from "@/public/images/main/slogan/digiuni-loading.png";

function Folders() {
    return (
        <Stack direction="row" className="w-1/2 h-fit gap-[15%] justify-center">
            <Box className="w-[75px] h-[66px] relative">
                <Image src={uaPartners} alt="UA partners" fill style={{
                    objectFit: "contain"
                }}/>
            </Box>
            <Box className="w-[75px] h-[66px] relative">
                <Image src={euPartners} alt="EU partners" fill style={{
                    objectFit: "contain"
                }}/>
            </Box>
        </Stack>
    )
}

export function DigiuniLoading() {
    return (
        <Stack className="w-3/5 h-[90%] items-center justify-center gap-[9%] mb-[2%] pl-[5%] lg:pl-[10%]">
            <Folders/>
            <Box className="w-4/5 h-1/3 relative">
                <Image src={digiuniLoading} alt="Digiuni Loading" fill style={{
                    objectFit: "contain"
                }}/>
            </Box>
        </Stack>
    )
}