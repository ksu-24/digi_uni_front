import {Box, Stack} from "@mui/material";
import partners from "@/resources/partners.json";
import React from "react";
import Carousel from "@/app/_util/components/carousel";

export default function PartnersWheel() {
    return (
        <Stack direction="row" className="h-[110px]  items-center overflow-x-clip mb-[5dvw]
        max-xs:!mb-[6dvw]
        max-lg:h-[88px] max-lg:mb-[7dvw]
        xl:mb-0">
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