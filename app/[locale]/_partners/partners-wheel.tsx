import React from "react";
import Carousel from "@/app/_util/components/carousel";
import {Stack} from "@mui/material";
import {get} from "@/app/_util/fetching";
import {getLocale} from "next-intl/server";
import {PartnerLocalization} from "@/app/[locale]/(with-header)/admin/partners/page";

const partnerLogoClasses = [
    "max-lg:h-[88px] h-[110px]",
    "max-lg:h-[56px] h-[75px]",
    "max-lg:h-[40px] h-[50px]"
]

export default async function PartnersWheel() {
    const language = (await getLocale()).toUpperCase();
    const partners = await (await get(`/partners?language=${language}`)).json() as (PartnerLocalization & {
        id: number;
    })[];

    return (
        <Stack direction="row" className="overflow-x-clip mb-[5dvw] justify-start
        max-xs:!my-[4dvw]
        max-lg:mb-[7dvw]
        xl:mb-0">
            <Carousel>
                {
                    partners.map((partner) => {
                        const logoType = partner.logo?.logoType;
                        const logoTypeClass = logoType === 1 || logoType === 2 ? 0
                            : (logoType === 4 ? 1 : 2);

                        return (
                            <img 
                                src={partner.logo?.url ?? ""}
                                alt={partner.name}
                                key={partner.id}
                                className={partnerLogoClasses[logoTypeClass] + " inline-block"}
                            />
                        )
                    })
                }
            </Carousel>
        </Stack>
    )
}
