import {DefaultContainer} from "@/app/_util/components/default-container";
import {SectionTitle} from "@/app/_util/components/section-title";
import {Box, Stack, Typography} from "@mui/material";
import {getTranslations} from "next-intl/server";
import {InfoContainer, InfoContainerItem} from "@/app/_util/components/info-container";
import enDict from "@/resources/dicts/en.json";
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
                        Object.keys(enDict.about.team.coordinators.list).map((coordinator, index) => (
                            <InfoContainerItem className="p-10 h-fit w-full shrink-0" key={index}>
                                <Stack direction="row" className="gap-8">
                                    <Box className="w-1/4 h-fit shrink-0">
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
                    <Typography variant="h3">{translations("title")}</Typography>
                    <Grid2 container rowSpacing={3.5} columnSpacing={2} className="w-full">
                        {Object.keys(enDict.about.team.list).map((teamMember, index) => (
                            <Grid2 key={index} xs={12} sm={6} md={4} lg={3} className="h-[60dvh]" sx={{
                                [`@media (min-width: ${screens["4xl"]})`]: {
                                    "&.MuiGrid2-root": {
                                        width: "calc(100%* 2/var(--Grid-columns)) !important"
                                    }
                                }
                            }}>
                                <Stack className="w-full h-full gap-8 items-center">
                                    <Box className="w-full bg-themed-gray h-1/2"/>
                                    <Stack className="w-full h-fit min-h-1/2 gap-5">
                                        <Typography
                                            variant="h4">{translations(`list.${teamMember}.name` as never)}</Typography>
                                        <Typography variant="body1"
                                                    fontSize={16} lineHeight={1.1}>{translations(`list.${teamMember}.role` as never)}</Typography>
                                        <Typography
                                            variant="body2" fontSize={14}>{translations(`list.${teamMember}.description` as never)}</Typography>
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