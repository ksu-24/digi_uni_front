import {BaseWrapper} from "@/app/_util/components/base-wrapper";
import {SectionTitle} from "@/app/_util/components/section-title";
import Title from "@/app/[locale]/_latestNews/title";
import Body from "@/app/[locale]/_latestNews/body";
import React from "react";
import {Stack} from "@mui/material";
import {ContentWrapper} from "@/app/[locale]/_about (main)/erasmus";

export default async function LatestNews() {
    return (
        <BaseWrapper className="bg-themed-light-gray w-full !my-0
        max-xs:!gap-[20dvw]
        xl:gap-[12dvw]" withPadding>
            <ContentWrapper className="
            max-lg:gap-[4.5dvw]
            ">
                <SectionTitle number={4} titleTranslationKey="main.news.title"/>
                <Title/>
                <Body/>
            </ContentWrapper>
        </BaseWrapper>
    );
}