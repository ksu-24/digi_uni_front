import {BaseWrapper, ContentWrapper} from "@/app/_util/components/wrappers";
import {Box, Stack, Typography} from "@mui/material";
import {getTranslations} from "next-intl/server";
import {InfoContainer, InfoContainerItem} from "@/app/_util/components/info-container";
import screens from "@/resources/screens.json";
import {SectionHeading, SectionTitle} from "@/app/_util/components/text-templates";
import {get} from "@/app/_util/fetching";
import {TeamMemberLocalization} from "@/app/[locale]/(with-header)/admin/team-members/page";

export default async function Team() {
    const translations = await getTranslations("about.team");

    const response = await get("/partners/teamMembers", { language: "EN" });
    const teamMembersData = await response.json() as TeamMemberLocalization[];

    const coordinators = teamMembersData.filter((member: any) => member.isMain === true);

    return (
        <section id="team">
            <Stack className="max-xs:gap-[12dvw]">
                <BaseWrapper withPadding disableGap className="
                    max-xs:mt-[4dvw] max-xs:gap-[12dvw]
                    ">
                    <ContentWrapper>
                        <SectionTitle number={5} titleTranslationKey="about.team.enumerationCaption"/>
                        <SectionHeading>{translations("coordinators.title")}</SectionHeading>
                    </ContentWrapper>
                </BaseWrapper>
                <InfoContainer disablePy
                               boxProps={{
                                   className: `my-[6dvw]
                                   max-xs:mt-0
                                   max-lg:mt-[7dvw] max-lg:mb-[10dvw]
                                   2xl:my-[4dvw]
                                   3xl:my-[3dvw]
                                   `
                               }}
                               stackProps={{
                                   className: `
                                   max-xs:!gap-[17dvw]
                                   xs:!p-0 xs:!gap-0
                                   `
                               }}>
                    {
                        coordinators.map((coordinator, index: number) => (
                            <InfoContainerItem
                                className="p-[3dvw]
                                    max-xs:!px-0 max-xs:!pb-[5dvw]
                                    max-md:p-[4dvw]
                                    "
                                key={index}>
                                <Stack className="items-start gap-[3dvw]
                                    max-xs:gap-[10dvw]
                                    max-md:gap-[4dvw]
                                    xs:!flex-row
                                    2xl:pr-[1dvw]
                                    ">
                                    <Box className="w-[20dvw] shrink-0
                                        max-xs:!w-full
                                        max-lg:w-[28dvw]
                                        2xl:w-[19dvw]
                                        3xl:w-[14dvw]
                                        ">
                                        <img
                                            src={coordinator.photo?.image || (coordinator.gender === "male" ? 
                                                "/images/about/man_placeholder.jpg" : 
                                                "/images/about/woman_placeholder.jpg")}
                                            alt="photo" width="100%"/>
                                    </Box>
                                    <Stack className="gap-[2dvw]
                                        max-xs:gap-[8dvw]
                                        3xl:gap-[1.5dvw]
                                        ">
                                        <Stack className="gap-[1dvw]
                                            max-xs:gap-[2dvw]
                                            3xl:gap-[0.5dvw]
                                            ">
                                            <Typography letterSpacing={"-0.01rem"}
                                                        variant="h4" className="max-w-[60dvw] !leading-[1.3]
                                                max-xs:!text-[29px]
                                                max-lg:text-[24px]
                                                xl:!text-[28px]
                                                3xl:!text-[30px]
                                                "
                                            >
                                                {coordinator.name}
                                            </Typography>
                                            <Typography
                                                variant="body1" fontSize={16}>
                                                {coordinator.title}
                                            </Typography>
                                        </Stack>
                                        <Stack className="gap-[1dvw]
                                            max-xs:gap-[4dvw]
                                            ">
                                            <Typography variant="body2" letterSpacing={0}>
                                                {coordinator.experience}
                                            </Typography>
                                            <Typography variant="body2" fontSize={14} letterSpacing={0}>
                                                {coordinator.degree}
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </InfoContainerItem>
                        ))
                    }
                </InfoContainer>
                <BaseWrapper disableGap className="gap-[5dvw]
                max-md:gap-[8dvw]
                3xl:gap-[3dvw]
                ">
                    <SectionHeading className="
                            max-xs:mb-[8dvw]
                            ">
                        {translations("title")}
                    </SectionHeading>
                    <Box className="grid w-full gap-[12dvw] grid-cols-1 !gap-x-[2dvw] !gap-y-[4dvw]
                            max-xs:!gap-y-[12dvw] max-xs:mt-[6dvw]
                            max-lg:gap-x-[3dvw] max-lg:gap-y-[5dvw]
                            xs:grid-cols-2 xs:gap-0
                            md:!grid-cols-3
                            lg:!grid-cols-4
                            xl:!gap-x-[3dvw]
                            2xl:!gap-[2dvw]
                            3xl:!grid-cols-5
                            " sx={{
                        [`@media (max-width: ${screens.xs})`]: {
                            margin: "0"
                        }
                    }}>
                        {teamMembersData
                            .toSorted((a, b) => b.priority - a.priority)
                            .map((teamMember, index) => (
                            <Stack key={index} sx={{
                                [`@media (max-width: ${screens.xs})`]: {
                                    padding: "0"
                                }
                            }}>
                                <Stack className="gap-[2dvw]
                                    max-xs:gap-[8dvw]
                                    ">
                                    <img src={teamMember.photo?.image || (teamMember.gender === "male" ?
                                        "/images/about/man_placeholder.jpg" :
                                        "/images/about/woman_placeholder.jpg"
                                    )} alt="photo" width="100%" className="aspect-square w-[20dvw]
                                            max-xs:!w-full
                                            max-lg:w-auto
                                            "/>
                                    <Stack className="gap-[1dvw]
                                        max-xs:gap-[2dvw]
                                        3xl:gap-[0.5dvw]
                                        " sx={{
                                        "&.MuiStack-root > .MuiTypography-root:first-letter": {
                                            textTransform: "uppercase"
                                        }
                                    }}>
                                        <Stack className="gap-[1dvw]
                                            max-xs:gap-[2dvw]
                                            xl:gap-[0.5dvw]
                                            ">
                                            <Typography
                                                variant="h5"
                                                lineHeight={1.3}
                                                letterSpacing={"-0.01rem"}
                                                className="
                                                    max-xs:!text-[26px]
                                                    "
                                            >
                                                {teamMember.name}
                                            </Typography>
                                        </Stack>
                                        <Typography variant="body2" className="xs:!text-[16px]"
                                                    lineHeight={1.5} letterSpacing={0}>
                                            {teamMember.institution}
                                        </Typography>
                                        <Typography variant="body2" className="xs:!text-[14px]"
                                                    lineHeight={1.5} letterSpacing={0}>
                                            {teamMember.degree}
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                        ))}
                    </Box>
                </BaseWrapper>
            </Stack>
        </section>
    )
}
