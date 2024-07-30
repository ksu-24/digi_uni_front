import React from "react";
import partners from "@/resources/partners.json";
import PartnerDropdown from "@/app/[locale]/_partners/partner-dropdown";
import {BaseWrapper} from "@/app/_util/components/wrappers";
import {List} from "@mui/material";

export type Person = {
    translationKey: string;
    email: string;
}

export type Partner = {
    translationKey: string;
    country: string;
    logo: string;
    link: string;
    people: Person[];
};

export async function PartnerDetails() {
    return (
        <BaseWrapper className="max-xs:!px-0
        max-xs:pt-[6dvw]
        xl:pt-[6dvw]
        2xl:pt-[5dvw]
        3xl:pt-[4dvw]
        " disableGap>
            <List className="!p-0">
                {
                    partners.map((partner, index) => (
                        <PartnerDropdown key={index} index={index + 1} partner={partner}/>
                    ))
                }
            </List>
        </BaseWrapper>
    );
}