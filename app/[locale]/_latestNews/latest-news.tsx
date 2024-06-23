import {DefaultContainer} from "@/app/_util/components/default-container";
import {SectionTitle} from "@/app/_util/components/section-title";
import Title from "@/app/[locale]/_latestNews/title";
import Body from "@/app/[locale]/_latestNews/body";

export default async function LatestNews() {
    return (
        <DefaultContainer className="bg-themed-gray w-full h-[100dvh] pt-[10dvh]">
            <SectionTitle number={4} titleTranslationKey="main.news.title"/>
            <Title/>
            <Body/>
        </DefaultContainer>
    );
}