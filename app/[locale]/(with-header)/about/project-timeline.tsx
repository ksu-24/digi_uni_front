import timelineDot from '@/public/images/about/timeline-dot.svg';
import {Box, Stack, Typography} from "@mui/material";
import Image from "next/image";
import React, {ReactNode} from "react";
import enDict from "@/resources/dicts/en.json";
import Timestamp from "@/app/_util/components/timestamp";
import {getTranslations} from "next-intl/server";
import colors from "@/resources/colors.json";
import screens from "@/resources/screens.json";
import {BaseWrapper, ContentWrapper} from "@/app/_util/components/wrappers";

import {SectionHeading, SectionTitle} from "@/app/_util/components/text-templates";
import themeObj from "@/app/_theme/theme-obj";

function TimelineItem(
    {
        children,
    }: {
        children: React.ReactNode,
    }
) {
    const widthClasses = "3xl:w-[7dvw] 2xl:w-[8.5dvw] lg:w-[10dvw] md:w-[11dvw]";
    return (
        <Box className={`flex md:flex-row flex-col items-center md:h-full w-full ${widthClasses}`}>
            <Stack className="relative h-full md:h-fit w-full md:w-fit" direction="row">
                <Stack className="md:h-fit w-4 items-center flex-1">
                    <Box className="w-4 h-4 bg-white shadow-none relative">
                        <Image src={timelineDot} alt="dot" fill className="object-contain"/>
                    </Box>
                    <hr className="w-px bg-themed-darkgray md:hidden flex-[2] max-md:bg-[#c3c6e3]"/>
                </Stack>
                <Stack
                    className={`md:top-full md:absolute timeline-item-content gap-5 pl-2 max-md:-mt-[1dvw] ${widthClasses} 
                    md:w-[15dvw] w-dvw h-fit mb-7 md:mb-0`}
                    sx={{
                        ...(React.Children.toArray(children).length > 2 && {
                            "&.MuiStack-root > li::after": {
                                content: "''",
                                width: "100%",
                                height: "1px",
                                backgroundColor: colors.gray.darkest,
                                display: "block",
                                marginTop: "1.25rem"
                            },
                            [`@media (max-width: ${screens.md})`]: {
                                "&.MuiStack-root > li::after": {
                                    backgroundColor: colors.info.main
                                }
                            }
                        }),
                        [`@media (min-width: ${screens.md})`]: {
                            flexDirection: "column"
                        }
                    }} component="ul">
                    <hr className="w-px h-10 bg-clip-padding bg-themed-darkgray py-2.5 hidden md:block"/>
                    {children}
                </Stack>
            </Stack>
            <hr className="w-full h-0.5 bg-themed-darkgray hidden md:block max-md:bg-[#c3c6e3]"/>
        </Box>
    )
}

function TimelineContainer(props: { children: ReactNode }) {
    return (
        <Stack direction="row" className="h-fit justify-center md:mt-[18rem] items-center" sx={{
            [`@media (min-width: ${screens.md})`]: {
                "&.MuiStack-root > *:nth-child(even) .timeline-item-content": {
                    transform: "translateY(calc(-100% - 1rem))",
                    flexDirection: "column-reverse !important"
                },
                flexDirection: "row",
                marginBottom: "calc(6dvh + 28.3rem)",
            },
            flexDirection: "column"
        }}>
            <hr className="md:block hidden w-10 h-0.5 bg-themed-darkgray"/>
            {props.children}
            <hr className="md:block hidden w-10 h-0.5 bg-themed-darkgray"/>
        </Stack>
    )
}

export default async function ProjectTimeline() {
    const translations = await getTranslations("about.timeline")
    return (
        <section id="timeline" className="max-xs:mt-[5dvw]">
            <BaseWrapper withPadding>
                <Stack className="gap-[6dvw]
                max-xs:gap-[12dvw]
                2xl:gap-[5dvw]
                ">
                    <ContentWrapper>
                        <SectionTitle number={7} titleTranslationKey="about.timeline.enumerationCaption"/>
                        <SectionHeading>{translations("title")}</SectionHeading>
                    </ContentWrapper>
                    <TimelineContainer>
                        {
                            Object.entries(enDict.about.timeline.milestones).map(([key, value], index) => {
                                const dateSplit = value.date.split("/");
                                const date = new Date();
                                date.setFullYear(2000 + parseInt(dateSplit[2]), parseInt(dateSplit[1]) - 1, parseInt(dateSplit[0]));
                                return (
                                    <TimelineItem key={index}>
                                        <Timestamp date={date} textProps={{
                                            className: "bg-secondary w-fit !text-themed-darkgray py-1",
                                            bgcolor: "#f4f5d1"
                                        }}/>
                                        {
                                            Object.keys(value.description).map((textKey, index) => {
                                                return (
                                                    <li className="w-full" key={index}>
                                                        <Typography key={index} variant="caption"
                                                                    className="max-xs:!text-[16px]"
                                                                    lineHeight={1.5} letterSpacing={0} fontFamily={
                                                            themeObj.typography.body2.fontFamily
                                                        }>
                                                            {translations("milestones." + key + ".description." + textKey as never)}
                                                        </Typography>
                                                    </li>
                                                )
                                            })
                                        }
                                    </TimelineItem>
                                )
                            })
                        }
                    </TimelineContainer>
                </Stack>
            </BaseWrapper>
        </section>
    )
}