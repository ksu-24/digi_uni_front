import Title from "@/app/[locale]/about/title";
import {unstable_setRequestLocale} from "next-intl/server";
import AboutProject from "@/app/[locale]/about/about-project";
import Goal from "@/app/[locale]/about/goal";
import ConcreteGoals from "@/app/[locale]/about/concrete-goals";
import banner from "@/public/images/about/banner.png";
import Image from "next/image";
import TargetAudience from "@/app/[locale]/about/target-audience";
import Team from "@/app/[locale]/about/team";
import Partners from "@/app/[locale]/about/partners";
import ProjectTimeline from "@/app/[locale]/about/project-timeline";
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