import {DefaultWrapper} from "@/app/_util/components/default-wrapper";
import enDict from "@/resources/dicts/en.json";
import {Box, Fade, Stack, Typography} from "@mui/material";
import {getTranslations} from "next-intl/server";
import themeObj, {body1Font, headerFont} from "@/app/_theme/theme-obj";
import {SectionTitle} from "@/app/_util/components/section-title";
import arrow from "@/public/images/about/arrow.svg";
import React, {CSSProperties} from "react";
import Image from "next/image";
import {InfoContainer} from "@/app/_util/components/info-container";
import Cards from "@/app/[locale]/_about (main)/cards";
import {Link} from "@/app/_localization/navigation";
import {idxToSection} from "@/app/[locale]/about/title";

function Arrow() {
    return <Image src={arrow} alt="arrow" width={48} height={48} className="rotate-90 xs:rotate-0 xs:!w-6 xs:!h-6"/>;
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
        <Stack className="gap-6 xs:items-center xs:flex-row" direction="column" sx={{
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
        <Fade className="pt-8 md:flex hidden delay-[400ms]" timeout={400} in={true}>
            <Stack direction="row" component="nav">
                {
                    Object.keys(enDict.about.aboutProject)
                        .filter(value => !isNaN(value as any))
                        .map((value, index) => (
                            <Box className="w-[11vw]" key={index}>
                                <Link href={"#" + idxToSection[index]}>
                                    <Typography variant="h6" letterSpacing="-0.03rem"
                                                fontFamily={body1Font}>{translations(value as never)}</Typography>
                                </Link>
                            </Box>
                        ))
                }
            </Stack>
        </Fade>
    )
}

async function ConsortiumMembersSection() {
    const translations = await getTranslations("about.aboutProject");
    return (
        <DefaultWrapper>
            <Typography variant="body2">{translations("consortiumMembers")}</Typography>
        </DefaultWrapper>
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
        <DefaultWrapper>
            <Typography variant="body2">{translations("afterInfoRows")}</Typography>
        </DefaultWrapper>
    );
}

async function InfoRows() {
    return (
        <Cards firstCardRoot="/images/about/start"/>
    )
}

async function Preamble() {
    const translations = await getTranslations("about.aboutProject");
    return (
        <DefaultWrapper>
            <NavBottom/>
            <SectionTitle
                number={1}
                titleTranslationKey="about.aboutProject.enumerationCaption"
                typographyProps={{marginTop: "11dvh"}}
            />
            <Typography variant="h2">{translations("title")}</Typography>
            <Typography variant="body2">{translations("content")}</Typography>
        </DefaultWrapper>
    );
}

export default async function AboutProject() {
    return (
        <section id="about-project">
            <DefaultWrapper className="!p-0">
                <Preamble/>
                <InfoRows/>
                <AfterInfoRows/>
                <GoalsSection/>
                <ConsortiumMembersSection/>
            </DefaultWrapper>
        </section>
    );
}
