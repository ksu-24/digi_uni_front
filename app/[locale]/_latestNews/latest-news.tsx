import {BaseWrapper, ContentWrapper} from "@/app/_util/components/wrappers";
import Title from "@/app/[locale]/_latestNews/title";
import Body from "@/app/[locale]/_latestNews/body";
import React from "react";
import {SectionTitle} from "@/app/_util/components/text-templates";

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