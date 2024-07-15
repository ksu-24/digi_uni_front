import {DefaultContainer} from "@/app/_util/components/default-container";
import enDict from "@/resources/dicts/en.json";
import {Box, Stack, Typography} from "@mui/material";
import {getTranslations} from "next-intl/server";
import themeObj, {body1Font, headerFont} from "@/app/_theme/theme-obj";
import {SectionTitle} from "@/app/_util/components/section-title";
import arrow from "@/public/images/about/arrow.svg";
import React, {CSSProperties} from "react";
import Image from "next/image";
import folders from "@/public/images/about/folders.png";
import clock from "@/public/images/about/clock.png";
import tuner from "@/public/images/about/tuner.png";
import {InfoContainer} from "@/app/_util/components/info-container";

function Arrow() {
    return <Image src={arrow} alt="arrow" width={24} height={24}/>;
}

async function RowContainer(
    {
        children,
        typographyStyles = {}
    }: {
        children: React.ReactNode,
        typographyStyles?: CSSProperties
    }
) {
    return (
        <Stack className="w-full gap-6" direction="row" sx={{
            "&.MuiStack-root p, strong": {
                fontFamily: headerFont + " !important",
                fontSize: themeObj.typography.body2.fontSize,
                ...typographyStyles
            }
        }} component="li">
            {children}
        </Stack>
    )
}

async function NavBottom() {
    const translations = await getTranslations("about.aboutProject")
    return (
        <Stack direction="row" className="pt-8" component="nav">
            {
                Object.keys(enDict.about.aboutProject)
                    .filter(value => !isNaN(value as any))
                    .map((value, index) => (
                        <Box className="w-[11vw]" key={index}>
                            <Typography variant="h6" letterSpacing="-0.03rem"
                                        fontFamily={body1Font}>{translations(value as never)}</Typography>
                        </Box>
                    ))
            }
        </Stack>
    )
}

async function ConsortiumMembersSection() {
    const translations = await getTranslations("about.aboutProject");
    return (
        <DefaultContainer>
            <Typography variant="body2">{translations("consortiumMembers")}</Typography>
        </DefaultContainer>
    );
}

async function GoalsSection() {
    const translations = await getTranslations("about.aboutProject");
    return (
        <InfoContainer stackProps={{
            className: "bg-info py-9 px-10 gap-6"
        }}>
            {['improvement', 'development', 'modernisation', 'potential'].map(goal => (
                <RowContainer key={goal} typographyStyles={{lineHeight: 1.4}}>
                    <Arrow/>
                    <Typography variant="body2">
                        {goal !== 'improvement' ? (
                            <>
                                <Typography variant="body1" component="strong" fontWeight={700}>
                                    {translations(`goals.${goal}.bold` as never) + " "}
                                </Typography>
                                {translations(`goals.${goal}.right` as never)}
                            </>
                        ) : (
                            <>
                                {translations(`goals.${goal}.left` as never) + " "}
                                <Typography variant="body1" component="strong" fontWeight={700}>
                                    {translations(`goals.${goal}.bold` as never) + " "}
                                </Typography>
                                {translations(`goals.${goal}.right` as never)}
                            </>
                        )}
                    </Typography>
                </RowContainer>
            ))}
        </InfoContainer>
    );
}

async function AfterInfoRows() {
    const translations = await getTranslations("about.aboutProject");
    return (
        <DefaultContainer>
            <Typography variant="body2">{translations("afterInfoRows")}</Typography>
        </DefaultContainer>
    );
}

async function InfoRows() {
    const translations = await getTranslations("about.aboutProject.info");
    return (
        <InfoContainer stackProps={{
            className: "py-6 px-10 gap-6"
        }}>
            <RowContainer>
                <img src={clock.src} alt="Duration" width="24px"/>
                <Typography variant="body1" fontWeight={700}>
                    {translations("duration.title") + ": "}
                    <Typography variant="body1" component="strong">
                        {translations("duration.content")}
                    </Typography>
                </Typography>
            </RowContainer>
            <RowContainer>
                <img src={tuner.src} alt="Coordinator" width="24px"/>
                <Typography variant="body1" fontWeight={700}>
                    {translations("coordinator.title") + ": "}
                    <Typography variant="body1" component="strong">
                        {translations("coordinator.content")}
                    </Typography>
                </Typography>
            </RowContainer>
            <RowContainer>
                <img src={folders.src} alt="First Presentation" width="24px"/>
                <Typography variant="body1" className="inline">
                    {translations("firstPresentation")}
                </Typography>
            </RowContainer>
        </InfoContainer>
    );
}

async function Preamble() {
    const translations = await getTranslations("about.aboutProject");
    return (
        <DefaultContainer>
            <NavBottom/>
            <SectionTitle
                number={1}
                titleTranslationKey="about.aboutProject.enumerationCaption"
                typographyProps={{marginTop: "11dvh"}}
            />
            <Typography variant="h3">{translations("title")}</Typography>
            <Typography variant="body2">{translations("content")}</Typography>
        </DefaultContainer>
    );
}

export default async function AboutProject() {
    return (
        <section id="about-project">
            <DefaultContainer className="!p-0">
                <Preamble/>
                <InfoRows/>
                <AfterInfoRows/>
                <GoalsSection/>
                <ConsortiumMembersSection/>
            </DefaultContainer>
        </section>
    );
}
