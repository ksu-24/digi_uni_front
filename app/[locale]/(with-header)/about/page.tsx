import Title from "@/app/[locale]/(with-header)/about/title";
import {unstable_setRequestLocale} from "next-intl/server";
import AboutProject from "@/app/[locale]/(with-header)/about/about-project";
import Goal from "@/app/[locale]/(with-header)/about/goal";
import ConcreteGoals from "@/app/[locale]/(with-header)/about/concrete-goals";
import TargetAudience from "@/app/[locale]/(with-header)/about/target-audience";
import Team from "@/app/[locale]/(with-header)/about/team";
import Partners from "@/app/[locale]/(with-header)/about/partners";
import ProjectTimeline from "@/app/[locale]/(with-header)/about/project-timeline";
import {Banner} from "@/app/[locale]/(with-header)/about/banner";
import {Box} from "@mui/material";
import {locales} from "@/app/_localization/i18n";

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
        <Box className="bg-white">
            <Title/>
            <AboutProject/>
            <Goal/>
            <ConcreteGoals/>
            <Banner/>
            <TargetAudience/>
            <Team/>
            <Partners/>
            <ProjectTimeline/>
        </Box>
    )
}

export async function generateStaticParams() {
    return locales.map(locale => ({
        params: {
            locale
        }
    }));
}