import folders from "@/public/images/main/about/folders.png";
import clock from "@/public/images/main/about/clock.png";
import durationTime from "@/public/images/main/about/duration-time.svg";
import tuner from "@/public/images/main/about/tuner.png";
import knu from "@/public/images/main/about/knu.png";
import {Box, Stack, Typography} from "@mui/material";
import Image, {StaticImageData} from "next/image";
import React from "react";
import {getTranslations} from "next-intl/server";
import themeObj from "@/app/[locale]/theme-obj";

const borders = "border-[1px] border-[#DEE1FC]";

function CardTitle(props: { translations: (key: "title") => string }) {
    return <Typography variant="h5" style={{
        backgroundColor: themeObj.palette.secondary.main
    }} className="w-fit">
        {props.translations("title") + ":"}
    </Typography>;
}

async function ProgramCard() {
    const translations = await getTranslations("main.boxes.program");
    return (
        <Card image={folders} imageAlt="Folders">
            <CardTitle translations={translations}/>
            <Typography variant="body2" className="w-[80%]">
                {translations("content")}
            </Typography>
        </Card>
    )
}

async function DurationCard() {
    const translations = await getTranslations("main.boxes.duration");
    return (
        <Card image={clock} imageAlt="Clock">
            <CardTitle translations={translations}/>
            <Image src={durationTime} alt={"2023-2027"} className="object-cover"/>
        </Card>
    )
}

async function CoordinatorCard() {
    const translations = await getTranslations("main.boxes.coordinator");
    return (
        <Card image={tuner} imageAlt="Tuner">
            <CardTitle translations={translations}/>
            <Stack className="gap-[14%] h-1/2">
                <Image src={knu} alt="KNU" className="object-cover"/>
                <Typography variant="body2" className="w-[80%]">
                    {translations("content")}
                </Typography>
            </Stack>
        </Card>
    )
}

export default async function Cards() {
    return (
        <Stack className={`${borders} w-full h-[50dvh] items-center mb-[22dvh]`}>
            <Stack direction="row" className="h-full w-[80%]">
                <ProgramCard/>
                <DurationCard/>
                <CoordinatorCard/>
            </Stack>
        </Stack>
    )
}

async function Card(
    {
        image,
        imageAlt,
        children
    }: {
        image: StaticImageData,
        imageAlt: string,
        children: React.ReactNode
    }
) {
    return (
        <Stack className={`h-full w-full ${borders}`}>
            <Box className="absolute w-[57px] h-[57px] -translate-y-1/2 translate-x-[40px]">
                <Image src={image} alt={imageAlt} fill className="object-cover"/>
            </Box>
            <Stack className="w-full h-full gap-[13%] pt-[15%] px-[11%]">
                {children}
            </Stack>
        </Stack>
    )
}