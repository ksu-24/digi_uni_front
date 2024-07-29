import {BaseWrapper} from "@/app/_util/components/wrappers";
import {Box, Typography} from "@mui/material";
import {getTranslations} from "next-intl/server";
import Grid2 from "@mui/material/Unstable_Grid2";
import partners from "@/resources/partners.json"
import {Link} from "@/app/_localization/navigation";
import {InfoContainer} from "@/app/_util/components/info-container";
import {SectionTitle} from "@/app/_util/components/text-templates";

export default async function Partners() {
    const translations = await getTranslations("about.partners");
    const partnerTranslations = await getTranslations("partners");
    return (
        <section id="partners">
            <BaseWrapper withPadding className="!p-0">
                <BaseWrapper>
                    <SectionTitle number={6} titleTranslationKey="about.partners.enumerationCaption"/>
                    <Typography variant="h2">{translations("title")}</Typography>
                </BaseWrapper>
                <InfoContainer>
                    <Grid2 container columns={60}>
                        {
                            Object.values(partners).map((partner, index) => (
                                <Grid2 key={index} xs={60} sm={30} lg={20} xl={12} component="li">
                                    <Box
                                        className="h-[25dvh] border-[1px] border-collapse border-info">
                                        <Link
                                            className="w-full h-full flex items-center justify-center p-9 hover:scale-105"
                                            href={partner.link}>
                                            <img src={partner.logo}
                                                 alt={partnerTranslations(partner.translationKey as never)}
                                                 className="w-auto max-h-full"/>
                                        </Link>
                                    </Box>
                                </Grid2>
                            ))
                        }
                    </Grid2>
                </InfoContainer>
            </BaseWrapper>
        </section>
    );
}