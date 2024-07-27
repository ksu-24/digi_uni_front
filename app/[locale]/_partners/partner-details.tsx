import React from "react";
import partners from "@/resources/partners.json";
import PartnerDropdown from "@/app/[locale]/_partners/partner-dropdown";
import {DefaultWrapper} from "@/app/_util/components/default-wrapper";
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
        <DefaultWrapper className="!gap-0 mb-[20dvh]">
            <List>
                {
                    partners.map((partner, index) => (
                        <PartnerDropdown key={index} index={index + 1} partner={partner}/>
                    ))
                }
            </List>
        </DefaultWrapper>
    );
}