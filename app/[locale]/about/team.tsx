import {DefaultContainer} from "@/app/_util/components/default-container";
import {SectionTitle} from "@/app/_util/components/section-title";
import {Box, Stack, Typography} from "@mui/material";
import {getTranslations} from "next-intl/server";
import {InfoContainer, InfoContainerItem} from "@/app/_util/components/info-container";
import team from "@/resources/team.json";
import Grid2 from "@mui/material/Unstable_Grid2";
import screens from "@/resources/screens.json";

export default async function Team() {
    const translations = await getTranslations("about.team");
    return (
        <section id="team">
            <DefaultContainer className="!p-0">
                <DefaultContainer withTopPadding>
                    <SectionTitle number={5} titleTranslationKey="about.team.enumerationCaption"/>
                    <Typography variant="h3">{translations("coordinators.title")}</Typography>
                </DefaultContainer>
                <InfoContainer boxProps={{
                    className: "h-fit"
                }}>
                    {
                        team.coordinators.map(({key: coordinator}, index) => (
                            <InfoContainerItem className="px-[5dvw] pb-[5dvw] md:p-[4dvw] lg:p-10 h-fit w-full shrink-0"
                                               key={index}>
                                <Stack className="gap-8 lg:flex-row">
                                    <Box className="w-full lg:w-1/4 h-fit shrink-0">
                                        <img
                                            src={`/images/about/${translations(`coordinators.list.${coordinator}.photo` as never)}`}
                                            alt="photo" width="100%"/>
                                    </Box>
                                    <Stack className="h-fit min-h-full gap-2.5">
                                        <Typography
                                            variant="h4">{translations(`coordinators.list.${coordinator}.name` as never)}</Typography>
                                        <Stack className="h-fit min-h-full gap-[1.875rem]">
                                            <Typography
                                                variant="body1" fontSize={16}
                                                lineHeight={1.1}>{translations(`coordinators.list.${coordinator}.role` as never)}</Typography>
                                            <Typography
                                                variant="body2">{translations(`coordinators.list.${coordinator}.description` as never)}</Typography>
                                            <Typography
                                                variant="body2"
                                                fontSize={14}>{translations(`coordinators.list.${coordinator}.experience` as never)}</Typography>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </InfoContainerItem>
                        ))
                    }
                </InfoContainer>
                <DefaultContainer>
                    <Typography variant="h2">{translations("title")}</Typography>
                    <Grid2 container columnSpacing={2} className="w-full gap-[12dvw] xs:gap-0" sx={{
                        [`@media (max-width: ${screens.xs})`]: {
                            margin: "0"
                        }
                    }}>
                        {team.all.map((teamMember, index) => (
                            <Grid2 key={index} xs={12} sm={6} md={4} lg={3} sx={{
                                [`@media (min-width: ${screens["4xl"]})`]: {
                                    "&.MuiGrid2-root": {
                                        width: "calc(100%* 2/var(--Grid-columns)) !important"
                                    }
                                },
                                [`@media (max-width: ${screens.xs})`]: {
                                    padding: "0"
                                }
                            }}>
                                <Stack className="h-full w-full lg:w-auto gap-8 items-center">
                                    <img src={teamMember.gender === "M" ?
                                        "/images/about/man_placeholder.jpg" :
                                        "/images/about/woman_placeholder.jpg"
                                    } alt="photo" width="100%"/>
                                    <Stack className="h-fit min-h-1/2 gap-4" sx={{
                                        "&.MuiStack-root > .MuiTypography-root:first-letter": {
                                            textTransform: "uppercase"
                                        }
                                    }}>
                                        <Typography variant="h4">{translations(`list.${teamMember.key}.name` as never)
                                            + (translations(`list.${teamMember.key}.degree` as never)
                                            !== `about.team.list.${teamMember.key}.degree` ? `, ${translations(`list.${teamMember.key}.degree` as never)}`
                                                : "")
                                        }</Typography>
                                        <Typography variant="body1"
                                                    fontSize={16}>{translations(`list.${teamMember.key}.position` as never)}</Typography>
                                        <Typography variant="caption"
                                                    lineHeight={1.5}>{translations(`list.${teamMember.key}.institution` as never)}</Typography>
                                    </Stack>
                                </Stack>
                            </Grid2>
                        ))}
                    </Grid2>
                </DefaultContainer>
            </DefaultContainer>
        </section>
    )
}