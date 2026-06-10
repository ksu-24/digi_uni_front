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
import {Box, Stack} from "@mui/material";

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
            <Stack className="items-center justify-center py-[8dvw]">
                <img
                    src="/images/main/slogan/funded-by-eu.png"
                    alt="Co-funded by the European Union"
                    className="h-[9.6dvw] w-auto
                    max-xs:h-[19.2dvw]
                    max-md:h-[14.4dvw]
                    max-lg:h-[12dvw]
                    xl:h-[7.2dvw]
                    3xl:h-[4.8dvw]
                    "
                />
            </Stack>
        </Box>
    )
}