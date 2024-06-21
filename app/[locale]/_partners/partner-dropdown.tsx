"use client"

import React from "react";
import {useTranslations} from "next-intl";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    IconButton,
    Skeleton,
    Stack,
    Typography
} from "@mui/material";
import {Partner, Person} from "@/app/[locale]/_partners/partner-details";
import {KeyboardArrowDown} from "@mui/icons-material";
import Link from "next/link";

function PersonPlaceholder() {
    return (
        <Stack className="gap-1 w-full">
            <Skeleton variant="text" width="100%"/>
            <Skeleton variant="text" width="100%" className="mt-3"/>
            <Skeleton variant="text" width="100%"/>
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
    const translations = useTranslations("main.partners.partnersList");
    const countryTranslations = useTranslations("countries");
    return (
        <Accordion expanded={expanded} elevation={0} sx={{
            borderBottom: "1px solid #AAAAAD",
            borderTop: 0,
            "::before": {
                display: "none"
            },
            margin: "0 !important"
        }}>
            <AccordionSummary sx={{
                "& .MuiAccordionSummary-content": {
                    margin: "0 !important"
                }
            }}>
                <Stack direction="row" className="items-center justify-between w-full h-fit" onClick={() => {
                    setExpanded(!expanded);
                }}>
                    <Typography variant="body2" className="whitespace-pre-wrap">
                        {
                            `${index}.\t\t${translations(partner.translationKey + '.title' as never).toUpperCase()}, ${countryTranslations(partner.country as never)}`
                        }
                    </Typography>
                    <IconButton>
                        {
                            <KeyboardArrowDown fontSize="small" className="transition-transform duration-200" style={{
                                transform: expanded ? "scaleY(-1)" : "scaleY(1)"
                            }}/>
                        }
                    </IconButton>
                </Stack>
            </AccordionSummary>
            <AccordionDetails>
                <Stack direction="row" className="w-fill h-[20dvh] items-center gap-[5%] bg-[#F7F7F7]">
                    <Box className="relative w-fit h-full" key={partner.translationKey}>
                        <img src={partner.logo} alt={partner.translationKey}
                             className="max-w-[25dvw] w-auto h-full object-contain"/>
                    </Box>
                    <Stack className="gap-4 w-full md:w-1/2">
                        <Link href={partner.link}>
                            <Typography variant="body2" className="text-[#012AFF]">{partner.link}</Typography>
                        </Link>
                        <Stack direction="row" className="gap-[5%] w-full">
                            {
                                partner.people ? partner.people.map((person, index) => (
                                        <PersonInfo key={index} person={person}/>
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
    )
}

function PersonInfo(
    {
        person,
    }: {
        person: Person;
    }
) {
    return (
        <Stack className="gap-1 w-full">
            <Typography variant="body2" bgcolor="secondary.main" className="w-fit">{person.title}</Typography>
            <Typography variant="body2" fontWeight={500} className="mt-3">{person.name}</Typography>
            <Typography variant="body2">{person.email}</Typography>
        </Stack>
    )
}