import React from "react";
import {DefaultContainer} from "@/app/_util/components/default-container";
import {SectionTitle} from "@/app/_util/components/section-title";
import {Box, Typography} from "@mui/material";
import {getTranslations} from "next-intl/server";
import {InfoContainer, InfoContainerItem} from "@/app/_util/components/info-container";
import enDict from "@/resources/dicts/en.json";

export default async function Goal() {
    const translations = await getTranslations("about.goal");
    return (
        <section id="goal">
            <DefaultContainer className="!p-0">
                <DefaultContainer withTopPadding>
                    <SectionTitle number={2} titleTranslationKey="about.goal.enumerationCaption"/>
                    <Typography variant="h3">{translations("title")}</Typography>
                </DefaultContainer>
                <InfoContainer boxProps={{
                    className: "min-h-[66dvh] h-fit"
                }}>
                    {
                        Object.keys(enDict.about.goal.goalsList).map((value, index) => (
                            <InfoContainerItem key={index} className="h-full justify-center p-10 relative">
                                <Box className="bg-info absolute top-[-18px] w-9 h-9 flex items-center justify-center">
                                    <Typography variant="body2" fontWeight={500}
                                                className="h-fit">{index + 1}</Typography>
                                </Box>
                                <Typography variant="body2">
                                    <Typography variant="body2"
                                                fontWeight={700}
                                                component="strong">{translations(`goalsList.${value}.bold` as never) + " "}</Typography>
                                    {translations(`goalsList.${value}.content` as never)}
                                </Typography>
                            </InfoContainerItem>
                        ))
                    }
                </InfoContainer>
            </DefaultContainer>
        </section>
    );
}