import Heading from "@/app/[locale]/_partners/heading";
import {DefaultContainer} from "@/app/_util/components/default-container";
import PartnersWheel from "@/app/[locale]/_partners/partners-wheel";
import {PartnerDetails} from "@/app/[locale]/_partners/partner-details";

export default async function Partners() {
    return (
        <DefaultContainer withTopPadding className={`!px-0`}>
            <Heading/>
            <PartnersWheel/>
            <PartnerDetails/>
        </DefaultContainer>
    )
}