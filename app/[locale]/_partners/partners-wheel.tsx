import {Box, Stack} from "@mui/material";
import partners from "@/resources/partners.json";
import React from "react";
import Carousel from "@/app/_util/components/carousel";

export default function PartnersWheel() {
    return (
        <Stack direction="row" className="h-[20dvh] max-lg:h-[88px] items-center overflow-x-clip">
            <Carousel>
                {
                    partners.map((partner) => {
                        return (
                            <Box className="relative w-fit h-full max-h-full flex items-center" key={partner.translationKey}>
                                <img src={partner.logo} alt={partner.translationKey} height="100%"
                                     className="max-w-[25dvw] object-contain max-h-full"/>
                            </Box>
                        )
                    })
                }
            </Carousel>
        </Stack>
    )
}