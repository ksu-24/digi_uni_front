"use client"

import React from "react";
import {useTranslations} from "next-intl";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    IconButton, ListItem,
    Skeleton,
    Stack,
    Typography
} from "@mui/material";
import {Partner, Person} from "@/app/[locale]/_partners/partner-details";
import {Link} from "@/app/_localization/navigation";
import colors from "@/resources/colors.json"

function PersonPlaceholder() {
    return (
        <Stack className="gap-1 w-full">
            <Skeleton variant="text" width="200px"/>
            <Skeleton variant="text" width="200px" className="mt-3"/>
            <Skeleton variant="text" width="200px"/>
        </Stack>
    )
}

export default function PartnerDropdown(
    {
        index,
        partner,
    }: {
        index: number;
        partner: Partner;
    }
) {
    const [expanded, setExpanded] = React.useState(false);
    const translations = useTranslations("partners");
    const countryTranslations = useTranslations("countries");
    return (
        <ListItem className="flex-row flex w-full h-fit">
            <Typography variant="body2">{index}</Typography>
            <Accordion expanded={expanded} elevation={0} sx={{
                borderBottom: "1px solid #AAAAAD",
                borderTop: 0,
                "::before": {
                    display: "none"
                },
                margin: "0 !important"
            }} className="w-full">
                <AccordionSummary sx={{
                    "& .MuiAccordionSummary-content": {
                        margin: "0 !important"
                    },
                    "&:hover *": {
                        color: `${colors.blue} !important`
                    }
                }} className="px-2 py-4">
                    <Stack direction="row" className="items-start justify-between w-full h-fit" onClick={() => {
                        setExpanded(!expanded);
                    }}>
                        <Typography variant="body2" className="whitespace-pre-wrap">
                            {
                                `\t\t${translations(partner.translationKey + '.title' as never).toUpperCase()}, ${countryTranslations(partner.country as never)}`
                            }
                        </Typography>
                        <IconButton>
                            <svg width="1rem" height="auto" viewBox="0 0 84 49" fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                                 className="transition-transform duration-200" style={{
                                transform: expanded ? "scaleY(-1)" : "scaleY(1)"
                            }}>
                                <path d="M48 36.1H36V48.1H48V36.1Z" fill="currentColor"></path>
                                <path d="M60 24.1H48V36.1H60V24.1Z" fill="currentColor"></path>
                                <path d="M71.9004 12H59.9004V24H71.9004V12Z" fill="currentColor"></path>
                                <path d="M83.9004 0H71.9004V12H83.9004V0Z" fill="currentColor"></path>
                                <path d="M36 24.1H24V36.1H36V24.1Z" fill="currentColor"></path>
                                <path d="M24 12.1H12V24.1H24V12.1Z" fill="currentColor"></path>
                                <path d="M12 0.0999756H0V12.1H12V0.0999756Z" fill="currentColor"></path>
                            </svg>
                        </IconButton>
                    </Stack>
                </AccordionSummary>
                <AccordionDetails>
                    <Stack direction="row"
                           className="w-fill h-[20dvh] items-center gap-[5%] bg-themed-lightgray p-[2%]">
                        <Box className="relative w-fit h-full" key={partner.translationKey}>
                            <img src={partner.logo} alt={partner.translationKey}
                                 className="max-w-[25dvw] w-auto h-full object-contain"/>
                        </Box>
                        <Stack className="gap-4 w-full">
                            <Link href={partner.link}>
                                <Typography variant="body2" className="text-[#012AFF]">{partner.link}</Typography>
                            </Link>
                            <Stack direction="row" className="gap-[25%] w-full justify-start">
                                {
                                    partner.people ? partner.people.map((person, index) => (
                                            <PersonInfo key={index} person={person}
                                                        partnerTranslationKey={partner.translationKey}/>
                                        ))
                                        : <>
                                            <PersonPlaceholder/> <PersonPlaceholder/>
                                        </>
                                }
                            </Stack>
                        </Stack>
                    </Stack>
                </AccordionDetails>
            </Accordion>
        </ListItem>
    )
}

function PersonInfo(
    {
        person,
        partnerTranslationKey,
    }: {
        person: Person
        partnerTranslationKey: string
    }
) {
    const translations = useTranslations(`partners.${partnerTranslationKey}` as never);
    const miscTranslations = useTranslations("misc");
    return (
        <Stack className="gap-1">
            <Typography variant="body2" bgcolor="secondary.main" className="w-fit">
                {translations(`people.${person.translationKey}.role` as never)}
            </Typography>
            <Typography variant="body2" fontWeight={500} className="mt-3 w-fit">
                {translations(`people.${person.translationKey}.name` as never)}
            </Typography>
            <Typography variant="body2">{
                miscTranslations(person.email as never).startsWith("misc.") ?
                    person.email :
                    miscTranslations(person.email as never)
            }</Typography>
        </Stack>
    )
}