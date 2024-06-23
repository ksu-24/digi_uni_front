import {Stack} from "@mui/material";
import Heading from "@/app/[locale]/_partners/heading";
import {defaultGap} from "@/app/_util/components/default-container";
import PartnersWheel from "@/app/[locale]/_partners/partners-wheel";
import {PartnerDetails} from "@/app/[locale]/_partners/partner-details";

export default async function Partners() {
    return (
        <Stack className={`${defaultGap} pt-[17dvh]`}>
            <Heading/>
            <PartnersWheel/>
            <PartnerDetails/>
        </Stack>
    )
}