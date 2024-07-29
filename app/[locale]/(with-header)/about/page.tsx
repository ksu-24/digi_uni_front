import Title from "@/app/[locale]/(with-header)/about/title";
import {unstable_setRequestLocale} from "next-intl/server";
import AboutProject from "@/app/[locale]/(with-header)/about/about-project";
import Goal from "@/app/[locale]/(with-header)/about/goal";
import ConcreteGoals from "@/app/[locale]/(with-header)/about/concrete-goals";
import banner from "@/public/images/about/banner.png";
import Image from "next/image";
import TargetAudience from "@/app/[locale]/(with-header)/about/target-audience";
import Team from "@/app/[locale]/(with-header)/about/team";
import Partners from "@/app/[locale]/(with-header)/about/partners";
import ProjectTimeline from "@/app/[locale]/(with-header)/about/project-timeline";
import Footer from "@/app/[locale]/_footer/footer";
import {BwTiles} from "@/app/_util/components/tiles";

export default async function AboutPage(
    {
        params
    }: {
        params: {
            locale: string
        }
    }
) {
    unstable_setRequestLocale(params.locale);

    return (
        <>
            <Title/>
            <AboutProject/>
            <Goal/>
            <ConcreteGoals/>
            <Image src={banner} alt="banner" width={"100%" as never}/>
            <TargetAudience/>
            <Team/>
            <Partners/>
            <ProjectTimeline/>
            <Footer tiles={<BwTiles/>}/>
        </>
    )
}