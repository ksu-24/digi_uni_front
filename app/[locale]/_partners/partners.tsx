import Heading from "@/app/[locale]/_partners/heading";
import PartnersWheel from "@/app/[locale]/_partners/partners-wheel";
import {PartnerDetails} from "@/app/[locale]/_partners/partner-details";
import {Box} from "@mui/material";

export default async function Partners() {
    return (
        <Box className="pb-[12dvw]
        2xl:pb-[10dvw]
        ">
            <Heading/>
            <PartnersWheel/>
            <PartnerDetails/>
        </Box>
    )
}