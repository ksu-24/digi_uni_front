import {BaseWrapper, ContentWrapper} from "@/app/_util/components/wrappers";
import {Box, Stack} from "@mui/material";
import {getTranslations} from "next-intl/server";
import partners from "@/resources/partners.json"
import {Link} from "@/app/_localization/navigation";
import {InfoContainer} from "@/app/_util/components/info-container";
import {SectionHeading, SectionTitle} from "@/app/_util/components/text-templates";

const logoClasses = [
    "max-xs:!w-[21dvw] max-md:w-[12dvw] w-[10dvw] xl:w-[7dvw] 3xl:w-[5dvw]",
    "max-xs:!w-[21dvw] max-md:w-[10dvw] w-[9dvw] xl:w-[6dvw] 3xl:w-[4dvw]",
    "max-xs:!w-[30dvw] max-md:w-[16dvw] w-[12dvw] xl:w-[10dvw] 2xl:w-[9dvw] 3xl:w-[7dvw]",
    "max-xs:!w-[32dvw] max-md:w-[18dvw] w-[14dvw] xl:w-[12dvw] 2xl:w-[11dvw] 3xl:w-[8dvw]",
]

export default async function Partners() {
    const translations = await getTranslations("about.partners");
    const partnerTranslations = await getTranslations("partners");
    return (
        <section id="partners">
            <BaseWrapper withPadding disableAfter className="!p-0">
                <Box>
                    <BaseWrapper>
                        <ContentWrapper>
                            <SectionTitle number={6} titleTranslationKey="about.partners.enumerationCaption"/>
                            <SectionHeading>{translations("title")}</SectionHeading>
                        </ContentWrapper>
                    </BaseWrapper>
                    <InfoContainer
                        boxProps={{
                            className: "!mt-[5dvw] max-xs:!px-[5dvw] xs:!mb-0"
                        }}
                        stackProps={{
                            className: "!p-0 !border-none"
                        }}
                    >
                        <Box className="grid grid-cols-4
                        max-xs:!grid-cols-2
                        max-md:grid-cols-3
                        xl:grid-cols-5
                        ">
                            {
                                Object.values(partners).map((partner, index) => (
                                    <Box component="li" key={index}>
                                        <Stack
                                            className="border-[1px] border-collapse border-info -ml-px -mt-px h-[18dvw]
                                            items-center justify-center
                                            max-xs:!h-[34dvw]
                                            max-md:h-[20dvw]
                                            xl:h-[14dvw]
                                            2xl:h-[12dvw]
                                            3xl:h-[10dvw]
                                            ">
                                            <Link
                                                className={
                                                    "flex items-center justify-center " +
                                                    logoClasses[parseInt(partner.logoType) - 1]
                                                }
                                                href={partner.link}>
                                                <img src={partner.logo}
                                                     alt={partnerTranslations(partner.translationKey as never)}
                                                     className="w-full"/>
                                            </Link>
                                        </Stack>
                                    </Box>
                                ))
                            }
                        </Box>
                    </InfoContainer>
                </Box>
            </BaseWrapper>
        </section>
    );
}