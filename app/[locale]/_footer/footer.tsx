import {DefaultContainer} from "@/app/_util/components/default-container";
import {Box, Stack, Typography} from "@mui/material";
import Image from "next/image";
import digiuniBW from "@/public/images/footer/digiuni-bw.svg";
import {getTranslations} from "next-intl/server";
import Nav from "@/app/_util/components/nav";
import {InfoTiles} from "@/app/_util/components/tiles";
import React from "react";


export default async function Footer(
    {
        tiles
    } : {
        tiles: React.ReactNode
    }
) {
    const translations = await getTranslations("misc");
    return (
        <>
            {tiles}
            <DefaultContainer component="footer"
                              className="bg-themed-darkgray h-fit min-h-[80dvh] w-full pt-[12dvh] pb-[6dvh] justify-between">
                <Stack direction="row" className="w-full min-h-fit justify-between items-center">
                    <Stack className="w-1/4 h-full gap-6">
                        <Box className="w-4/5 h-2/5 relative">
                            <Image src={digiuniBW} fill alt="Digiuni Logo" className="object-contain"/>
                        </Box>
                        <Typography variant="body1" className="text-themed-light-gray"
                                    fontSize="16px">{translations("slogan")}</Typography>
                    </Stack>
                    <Nav fontWeight={400} className="text-white"/>
                </Stack>
                <img src={"/images/footer/digiuni-dark-purple.svg"} alt="Digiuni Logo"/>
                <Typography variant="body2" className="w-full min-h-fit text-themed-darker-gray" fontSize="14px">
                    {translations("copyright")}
                </Typography>
            </DefaultContainer>
        </>
    )
}