import React from "react";
import {BaseWrapper, ContentWrapper, HeadingWrapper} from "@/app/_util/components/wrappers";
import {Box, Typography} from "@mui/material";
import {getTranslations} from "next-intl/server";
import {InfoContainer, InfoContainerItem} from "@/app/_util/components/info-container";
import enDict from "@/resources/dicts/en.json";
import {SectionHeading, SectionTitle} from "@/app/_util/components/text-templates";
import screens from "@/resources/screens.json";

export default async function Goal() {
    const translations = await getTranslations("about.goal");
    return (
        <section id="goal">
            <BaseWrapper withPadding disableAfter>
                <ContentWrapper className="max-xs:!my-[18dvw]">
                    <SectionTitle number={2} titleTranslationKey="about.goal.enumerationCaption"/>
                    <SectionHeading>{translations("title")}</SectionHeading>
                </ContentWrapper>
            </BaseWrapper>
            <InfoContainer boxProps={{
                className: `mt-[6dvw] !mb-0
                max-xs:!mb-[12dvw]
                max-md:!mt-[8dvw]
                max-lg:mt-[7dvw]
                2xl:mt-[6dvw]
                3xl:mt-[4dvw]
                `
            }} stackProps={{
                className: "!p-0 !gap-0 max-xs:!py-0"
            }}>
                {
                    Object.keys(enDict.about.goal.goalsList).map((value, index) => (
                        <InfoContainerItem key={index} className="h-full justify-center relative
                        xl:pr-[9dvw] xl:pb-[4dvw]
                        3xl:pb-[2.5dvw] 3xl:pl-[2dvw] 3xl:pt-[2.5dvw]
                        " sx={{
                            paddingTop: "4dvw",
                            paddingLeft: "3dvw",
                            paddingRight: "3dvw",
                            [`@media (max-width: ${screens.lg})`]: {
                                paddingLeft: "4dvw",
                                paddingRight: "4dvw",
                                paddingBottom: "4dvw"
                            },
                            [`@media (max-width: ${screens.md})`]: {
                                paddingTop: "8dvw",
                                paddingBottom: "8dvw"
                            },
                            [`@media (max-width: ${screens.xs})`]: {
                                paddingLeft: "5dvw",
                                paddingRight: "5dvw",
                                paddingTop: "16dvw",
                                paddingBottom: "14dvw"
                            },
                        }}>
                            <Box className="bg-info absolute top-[-25px] h-12 flex items-center left-[3dvw]
                            justify-center rounded-[4px] py-[1.2dvw] pr-[1.2dvw]
                            max-xs:left-[5dvw]
                            xl:rounded-[2px]
                            2xl:p-[1dvw]
                            3xl:p-[0.8dvw] 3xl:left-[2dvw]
                            " sx={{
                                paddingLeft: "1.2dvw",
                                [`@media (max-width: ${screens.lg})`]: {
                                    paddingLeft: "2dvw",
                                },
                                [`@media (max-width: ${screens.md})`]: {
                                    paddingLeft: "2.5dvw",
                                },
                                [`@media (max-width: ${screens.xs})`]: {
                                    paddingLeft: "4dvw !important",
                                    paddingRight: "4dvw !important",
                                    paddingTop: "4dvw !important",
                                    paddingBottom: "4dvw !important",
                                },
                            }}>
                                <Typography variant="h6" fontSize={20} lineHeight={"20px"}
                                            className="h-fit
                                            xl:!text-[18px]
                                            ">
                                    {translations("goal") + " "}{index + 1}
                                </Typography>
                            </Box>
                            <Typography variant="body2" letterSpacing={0}>
                                {translations(`goalsList.${value}.content` as never)}
                            </Typography>
                        </InfoContainerItem>
                    ))
                }
            </InfoContainer>
        </section>
    );
}