import {DefaultWrapper} from "@/app/_util/components/default-wrapper";
import {SectionTitle} from "@/app/_util/components/section-title";
import Title from "@/app/[locale]/_latestNews/title";
import Body from "@/app/[locale]/_latestNews/body";

export default async function LatestNews() {
    return (
        <DefaultWrapper className="bg-themed-light-gray w-full min-h-dvh pt-[10dvh]">
            <SectionTitle number={4} titleTranslationKey="main.news.title"/>
            <Title/>
            <Body/>
        </DefaultWrapper>
    );
}