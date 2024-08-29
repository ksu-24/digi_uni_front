import {BaseWrapper, TextWrapper} from "@/app/_util/components/wrappers";
import enDict from "@/resources/dicts/en.json";
import {Box, Fade, Stack, Typography} from "@mui/material";
import {getTranslations} from "next-intl/server";
import themeObj, {body1Font, headerFont} from "@/app/_theme/theme-obj";
import React, {CSSProperties} from "react";
import {InfoContainer} from "@/app/_util/components/info-container";
import Cards from "@/app/[locale]/_about (main)/cards";
import {Link} from "@/app/_localization/navigation";
import {idxToSection} from "@/app/[locale]/(with-header)/about/title";
import {SectionHeading, SectionTitle} from "@/app/_util/components/text-templates";
import screens from "@/resources/screens.json"
import EnterAnimation from "@/app/_util/components/enter-animation";

function Arrow() {
    return (
        <Stack
            className=" justify-center items-center bg-white
            max-xs:!bg-info
            max-md:mt-[3px]
            xs:min-w-10 xs:h-10
            "
            sx={{
                minWidth: 48,
                height: 48,
                [`@media (max-width: ${screens.lg})`]: {
                    minWidth: 34,
                    height: 34
                },
                [`@media (max-width: ${screens.md})`]: {
                    minWidth: 31,
                    height: 31
                },
                [`@media (max-width: ${screens.xs})`]: {
                    minWidth: 24,
                    height: 24
                }
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 13 11" fill="none" className="
            max-xs:w-[14px] max-xs:h-[14px]
            ">
                <path
                    d="M13 4.69512V6.30488H11.3404V7.78049H9.68085V6.17073H0V4.82927H9.68085V3.21951H11.3404V4.69512H13Z"
                    fill="black"/>
                <path d="M9.68085 1.60976H8.02128V3.21951H9.68085V1.60976Z" fill="black"/>
                <path d="M8.02128 0H6.3617V1.60976H8.02128V0Z" fill="black"/>
                <path d="M9.68085 7.78049H8.02128V9.39024H9.68085V7.78049Z" fill="black"/>
                <path d="M8.02128 9.39024H6.3617V11H8.02128V9.39024Z" fill="black"/>
            </svg>
        </Stack>
    );
}

async function RowContainer(
    {
        children,
        typographyStyles = {},
    }: {
        children: React.ReactNode,
        typographyStyles?: CSSProperties
    }
) {
    return (
        <Stack className="gap-[2dvw] md:items-center
        max-xs:!gap-[4dvw]
        max-lg:gap-[3dvw]
        xl:gap-[2.2rem]
        2xl:gap-[2.4rem]
        3xl:gap-[1.5dvw]
        " direction="row" sx={{
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
        <Stack direction="row" className="w-full
        max-lg:pr-[1dvw]">
            <Fade className="md:flex hidden delay-[600ms] pt-[2dvw] pb-[1.5dvw] gap-4
                3xl:pt-[1dvw] w-full
                " timeout={400} in={true}>
                <Stack direction="row" component="nav">
                    {
                        Object.keys(enDict.about.aboutProject)
                            .filter(value => !isNaN(value as any))
                            .map((value, index) => (
                                <Box className="w-full" key={index}>
                                    <Link href={"#" + idxToSection[index]} className="max-w-[7dvw] inline-block
                                3xl:max-w-[5dvw]
                                ">
                                        <Typography
                                            variant="caption" lineHeight={1.3} letterSpacing={0}
                                            className="inline-block max-w-full"
                                            fontFamily={body1Font}>{translations(value as never)}</Typography>
                                    </Link>
                                </Box>
                            ))
                    }
                </Stack>
            </Fade>
        </Stack>
    )
}

async function ConsortiumMembersSection() {
    const translations = await getTranslations("about.aboutProject");
    return (
        <BaseWrapper>
            <TextWrapper>
                <Typography
                    variant="body2" className="
                    2xl:w-[95%]
                    " letterSpacing={0}
                >
                    {translations("consortiumMembers")}
                </Typography>
            </TextWrapper>
        </BaseWrapper>
    );
}

async function GoalsSection() {
    const translations = await getTranslations("about.aboutProject");
    return (
        <InfoContainer stackProps={{
            className: `!bg-info 
            max-xs:!bg-themed-light-gray
            `
        }} boxProps={{
            className: `
            2xl:!my-[4dvw]
            `
        }}>
            {['improvement', 'development', 'modernisation', 'potential'].map(goal => (
                <RowContainer key={goal} typographyStyles={{
                    lineHeight: "1.4 !important",
                    letterSpacing: "0 !important",
                    fontSize: "18px !important"
                }}>
                    <Arrow/>
                    <Box>
                        <TextWrapper>
                            <Typography variant="body1">
                                {goal !== 'improvement' ? (
                                    <>
                                        <Typography variant="body1" component="strong"
                                                    fontWeight={700}>
                                            {translations(`goals.${goal}.bold` as never)}
                                        </Typography>
                                        {" " + translations(`goals.${goal}.right` as never)}
                                    </>
                                ) : (
                                    <>
                                        {translations(`goals.${goal}.left` as never) + " "}
                                        <Typography variant="body1" component="strong"
                                                    fontWeight={700}>
                                            {translations(`goals.${goal}.bold` as never)}
                                        </Typography>
                                        {" " + translations(`goals.${goal}.right` as never)}
                                    </>
                                )}
                            </Typography>
                        </TextWrapper>
                    </Box>
                </RowContainer>
            ))}
        </InfoContainer>
    );
}

async function AfterInfoRows() {
    const translations = await getTranslations("about.aboutProject");
    return (
        <BaseWrapper>
            <TextWrapper>
                <Typography
                    variant="body2"
                    letterSpacing={0}>
                    {translations("afterInfoRows")}
                </Typography>
            </TextWrapper>
        </BaseWrapper>
    );
}

async function InfoRows() {
    return (
        <Cards firstCardRoot="/images/about/start" containerClassName="!my-[7dvw]
        xl:!my-[6dvw]
        3xl:!my-[3dvw]
        "/>
    )
}

async function Preamble() {
    const translations = await getTranslations("about.aboutProject");
    return (
        <EnterAnimation direction="up" delay={1000} offset={0} duration={400}>
            <BaseWrapper disableGap>
                <NavBottom/>
                <Stack className="gap-[5dvw] pt-[12dvw]
                    max-xs:mt-[18dvw] max-xs:mb-[12dvw] max-xs:gap-10
                    xl:gap-[4dvw]
                    2xl:pt-[8dvw]
                    3xl:pt-[6dvw] 3xl:gap-[3dvw]
                    ">
                    <SectionTitle
                        number={1}
                        titleTranslationKey="about.aboutProject.enumerationCaption"
                    />
                    <SectionHeading>{translations("title")}</SectionHeading>
                    <TextWrapper>
                        <Typography variant="body2">{translations("content")}</Typography>
                    </TextWrapper>
                </Stack>
            </BaseWrapper>
        </EnterAnimation>
    );
}

export default async function AboutProject() {
    return (
        <section id="about-project">
            <Stack>
                <Preamble/>
                <InfoRows/>
                <AfterInfoRows/>
                <GoalsSection/>
                <ConsortiumMembersSection/>
            </Stack>
        </section>
    );
}
