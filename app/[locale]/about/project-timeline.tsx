import {DefaultContainer} from "@/app/_util/components/default-container";
import {SectionTitle} from "@/app/_util/components/section-title";
import {Stack, Typography} from "@mui/material";
import {getTranslations} from "next-intl/server";
import {
    Timeline,
    TimelineConnector,
    TimelineContent as MuiTimelineContent,
    TimelineDot as MuiTimelineDot,
    TimelineItem,
    TimelineSeparator
} from "@mui/lab";
import customTimelineDot from "@/public/images/about/timeline-dot.svg";
import Image from "next/image";
import React from "react";

function TimelineDot() {
    return (
        <MuiTimelineDot className="bg-white p-0 relative w-4 h-4 shadow-none">
            <Image src={customTimelineDot} alt="dot" fill className="object-contain"/>
        </MuiTimelineDot>
    )
}

function TimelineContent({children, date, padding, XMarginStack, marginContent = "0"}: {
    children: React.ReactNode,
    date: string,
    padding: string,
    XMarginStack: string,
    marginContent?: string
}) {
    return (
        <MuiTimelineContent style={{
            paddingTop: padding,
            marginTop: marginContent,
            marginBottom: marginContent,
        }}>
            <Stack direction={"inherit" as never} className="gap-10 w-[12.5rem]" style={{
                marginRight: XMarginStack,
                marginLeft: XMarginStack,
            }}>
                <Stack className="gap-5">
                    {React.Children.toArray(children).length === 1 ? children :
                        React.Children.map(children, (child, index) => (
                            <React.Fragment key={index}>
                                {child}
                                <hr className="w-full h-px bg-themed-darkgray"/>
                            </React.Fragment>
                        ))
                    }
                </Stack>
                <Typography variant="caption" className="w-fit h-fit bg-secondary" component="time">{date}</Typography>
                <hr className="h-10 w-px bg-themed-darkgray"/>
            </Stack>
        </MuiTimelineContent>
    )
}

export default async function ProjectTimeline() {
    const translations = await getTranslations("about.timeline")
    return (
        <section id="timeline">
            <DefaultContainer withTopPadding className="h-dvh">
                <SectionTitle number={7} titleTranslationKey="about.timeline.enumerationCaption"/>
                <Typography variant="h3">{translations("title")}</Typography>
                <Timeline className="-rotate-90" sx={{
                    "&.MuiTimeline-root > .MuiTimelineItem-root > .MuiTimelineContent-root > *": {
                        transform: "rotate(90deg)",
                    },
                    "&.MuiTimeline-root > .MuiTimelineItem-root > .MuiTimelineContent-root": {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                    },
                    "&.MuiTimeline-root > :nth-child(even) > .MuiTimelineContent-root": {
                        flexDirection: "column-reverse",
                        alignItems: "end",
                    },
                    "&.MuiTimeline-root > .MuiTimelineItem-root": {
                        minHeight: "0 !important",
                        flex: "2 !important"
                    }
                }} position="alternate">
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot/>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent date="31/12/24" padding="1.25rem" XMarginStack="-1.25rem">
                            <Typography variant="body2" fontSize={14}>Obtain experience and best practices from Digiuni
                                EU Partners</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot/>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent date="30/04/25" padding="1.89rem" XMarginStack="-1.75rem">
                            <Typography variant="body2" fontSize={14}>Create training curriculum for teachers and
                                trainers</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot/>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent date="31/05/25" padding="1.9rem" XMarginStack="-1.78rem">
                            <Typography variant="body2" fontSize={14}>Create 10 DigiCentres in each UA partner
                                university</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot/>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent date="31/07/25" padding="0rem" XMarginStack="4rem" marginContent="-3.9rem">
                            <Typography variant="body2" fontSize={14}>Launch DigiPlatform</Typography>
                            <Typography variant="body2" fontSize={14}>Create UA Digital educational ecosystem</Typography>
                            <Typography variant="body2" fontSize={14}>Obtain experience and best practices from Digiuni EU Partners</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot/>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent date="31/12/25" padding="1.3rem" XMarginStack="-1.3rem">
                            <Typography variant="body2" fontSize={14}>UA university staff trained and ready to use DigiUni platform</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot/>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent date="31/03/26" padding="0rem" XMarginStack="1.4rem" marginContent="-1.36rem">
                            <Typography variant="body2" fontSize={14}>Developed rules for Quality assurance of digital content</Typography>
                            <Typography variant="body2" fontSize={14}>Existing digital content placed on DigiPlatform</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot/>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent date="31/07/26" padding="1.3rem" XMarginStack="-1.3rem">
                            <Typography variant="body2" fontSize={14}>UA university staff trained and ready to use DigiUni platform</Typography>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </DefaultContainer>
        </section>
    )
}