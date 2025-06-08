import React from "react";
import PartnerDropdown from "@/app/[locale]/_partners/partner-dropdown";
import {BaseWrapper} from "@/app/_util/components/wrappers";
import {List} from "@mui/material";
import {get} from "@/app/_util/fetching";
import {getLocale} from "next-intl/server";
import {PartnerLocalization} from "@/app/[locale]/(with-header)/admin/partners/page";

export type Person = {
    id: number;
    name: string;
    email: string;
    title: string;
}

export type PartnerLocalizationResponse = PartnerLocalization & {
    team: Person[]
}

export async function PartnerDetails() {
    const language = (await getLocale()).toUpperCase();
    const response = await get(`/partners?language=${language}`);
    const partnersData = await response.json();

    return (
        <BaseWrapper className="max-xs:!w-full
        max-xs:pt-[6dvw]
        xl:pt-[6dvw]
        2xl:pt-[5dvw]
        3xl:pt-[4dvw]
        " disableGap>
            <List className="!p-0">
                {
                    partnersData.map((partner: PartnerLocalizationResponse, index: number) => (
                        <PartnerDropdown key={index} index={index + 1} partner={partner}/>
                    ))
                }
            </List>
        </BaseWrapper>
    );
}
