import Image from "next/image";
import React from "react";
import {getLocale} from "next-intl/server";
import {Box} from "@mui/material";
import {DefaultContainer} from "@/app/_util/components/default-container";

function localeExtension(locale: string) {
    return locale === "en" ? "jpg" : "svg";
}

async function ProgramCard() {
    const locale = await getLocale();
    return (
        <Card>
            <Image src={`/images/main/program-${locale}.${localeExtension(locale)}`} alt="Program" fill
                   className="object-contain !bottom-0 !top-auto"/>
        </Card>
    )
}

async function DurationCard() {
    const locale = await getLocale();
    return (
        <Card>
            <Image src={`/images/commons/duration-${locale}.${localeExtension(locale)}`} alt={"2023-2027"} fill
                   className="object-contain !h-auto !bottom-0 !top-auto"/>
        </Card>
    )
}

async function CoordinatorCard() {
    const locale = await getLocale();
    return (
        <Card>
            <Image src={`/images/commons/coordinator-${locale}.${localeExtension(locale)}`} alt="Coordinator" fill
                   className="object-contain !h-auto !bottom-0 !top-auto"/>
        </Card>
    )
}

async function CustomCard(
    {
        root
    }: {
        root: string
    }
) {
    const locale = await getLocale();
    return (
        <Card>
            <Image src={`${root}-${locale}.${localeExtension(locale)}`} alt={"card"} fill
                     className="object-contain !h-auto !bottom-0 !top-auto"/>
        </Card>
    )
}

export default async function Cards(
    {
        firstCardRoot
    }: {
        firstCardRoot?: string
    }
) {
    return (
        <DefaultContainer className="mb-[22dvh] !gap-[2dvw]" direction="row">
            {firstCardRoot ? <CustomCard root={firstCardRoot}/> : <ProgramCard/>}
            <DurationCard/>
            <CoordinatorCard/>
        </DefaultContainer>
    )
}

async function Card(
    {
        children
    }: {
        children: React.ReactNode
    }
) {
    return (
        <Box className={`w-1/3 relative`} sx={{
            height: "calc(25dvw * 1.2)"
        }}>
            {children}
        </Box>
    )
}