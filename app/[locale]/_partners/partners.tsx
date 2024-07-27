import Heading from "@/app/[locale]/_partners/heading";
import PartnersWheel from "@/app/[locale]/_partners/partners-wheel";
import {PartnerDetails} from "@/app/[locale]/_partners/partner-details";
import {DefaultWrapper} from "@/app/_util/components/default-wrapper";

export default async function Partners() {
    return (
        <>
            <Heading/>
            <DefaultWrapper className="!p-0">
                <PartnersWheel/>
                <PartnerDetails/>
            </DefaultWrapper>
        </>
    )
}