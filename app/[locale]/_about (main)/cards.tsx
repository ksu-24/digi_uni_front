import React from "react";
import {getLocale} from "next-intl/server";
import {Box, Stack} from "@mui/material";
import {BaseWrapper} from "@/app/_util/components/wrappers";
import screens from "@/resources/screens.json";

function localeExtension(locale: string) {
    return locale === "en" ? "jpg" : "svg";
}

async function ProgramCard() {
    const locale = await getLocale();
    return (
        <Card>
            <img src={`/images/main/program-${locale}.${localeExtension(locale)}`} alt="Program" width="100%"
                 className="object-contain !bottom-0 !top-auto"/>
        </Card>
    )
}

async function DurationCard() {
    const locale = await getLocale();
    return (
        <Card>
            <img src={`/images/commons/duration-${locale}.${localeExtension(locale)}`} alt={"2023-2027"} width="100%"
                 className="object-contain !h-auto !bottom-0 !top-auto"/>
        </Card>
    )
}

async function CoordinatorCard() {
    const locale = await getLocale();
    return (
        <Card>
            <img src={`/images/commons/coordinator-${locale}.${localeExtension(locale)}`} alt="Coordinator" width="100%"
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
            <img src={`${root}-${locale}.${localeExtension(locale)}`} alt={"card"} width="100%"
                 className="object-contain !h-auto !bottom-0 !top-auto"/>
        </Card>
    )
}

export default async function Cards(
    {
        containerClassName = "",
        firstCardRoot,
    }: {
        firstCardRoot?: string,
        containerClassName?: string
    }
) {
    return (
        <BaseWrapper className="!my-0">
            <Stack direction="column" className={containerClassName + ` gap-4
            max-xs:-mt-[10dvw] max-xs:gap-5
            max-md:gap-[9px]
            xs:!flex-row xs:items-end
            xl:max-w-[70dvw] xl:gap-[2dvw]
            xl:-mt-[4dvw]
            3xl:max-w-[47dvw] 3xl:gap-[1dvw]
        `}>
                {firstCardRoot ? <CustomCard root={firstCardRoot}/> : <ProgramCard/>}
                <DurationCard/>
                <CoordinatorCard/>
            </Stack>
        </BaseWrapper>
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
        <Box className={`w-full xs:w-1/3 relative`} sx={{
            [`@media (max-width: ${screens.xs})`]: {
                maxWidth: "320px"
            }
        }}>
            {children}
        </Box>
    )
}