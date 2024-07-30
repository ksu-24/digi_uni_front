import partners from "@/resources/partners.json";
import React from "react";
import Carousel from "@/app/_util/components/carousel";
import {Stack} from "@mui/material";

const partnerLogoClasses = [
    "max-lg:h-[88px] h-[110px]",
    "max-lg:h-[56px] h-[75px]",
    "max-lg:h-[40px] h-[50px]"
]

export default function PartnersWheel() {
    return (
        <Stack direction="row" className="overflow-x-clip mb-[5dvw] justify-start
        max-xs:!my-[4dvw]
        max-lg:mb-[7dvw]
        xl:mb-0">
            <Carousel>
                {
                    partners.map((partner) => {
                        return (
                            <img src={partner.logo} alt={partner.translationKey} key={partner.translationKey}
                                 className={partnerLogoClasses[partner.logoType === "1" || partner.logoType === "2" ? 0
                                     : (partner.logoType === "4" ? 1 : 2)] + " inline-block"}/>
                        )
                    })
                }
            </Carousel>
        </Stack>
    )
}