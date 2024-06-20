import React from "react";
import partners from "@/resources/partners.json";
import PartnerDropdown from "@/app/[locale]/_partners/partner-dropdown";
import {DefaultContainer} from "@/app/[locale]/_util/components/default-container";

export type Person = {
    title: string;
    name: string;
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
        <DefaultContainer classes="gap-0">
            {
                partners.map((partner, index) => (
                    <PartnerDropdown key={index} index={index+1} partner={partner}/>
                ))
            }
        </DefaultContainer>
    );
}