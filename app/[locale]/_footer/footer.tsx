import {BaseWrapper} from "@/app/_util/components/wrappers";
import {Stack, Typography} from "@mui/material";
import {getTranslations} from "next-intl/server";
import Nav from "@/app/_util/components/nav";
import React from "react";
import screens from "@/resources/screens.json"


export default async function Footer(
    {
        tiles
    }: {
        tiles: React.ReactNode
    }
) {
    const translations = await getTranslations("misc");
    return (
        <>
            {tiles}
            <BaseWrapper component="footer"
                         className="bg-themed-darkgray h-fit w-full justify-between
                         max-xs:!pt-[20dvw] max-xs:!pb-[4dvw]
                         xl:!pt-[10dvw]
                         3xl:!pt-[5dvw]
                         "
                         sx={{
                             paddingTop: "8dvw",
                             [`@media (max-width: ${screens.lg})`]: {
                                 paddingTop: "12dvw"
                             },
                             [`@media (max-width: ${screens.md})`]: {
                                 paddingTop: "14dvw"
                             },
                             [`@media (max-width: ${screens.xs})`]: {
                                 paddIngTop: "20dvw"
                             },
                         }} disableGap
            >
                <Stack direction="row" className="min-h-fit justify-between items-start xs:items-center">
                    <Stack className="gap-[2dvw]
                    3xl:gap-[1.5dvw]
                    ">
                        <img src="/images/header/digiuni-bw.svg" alt="digiuni-bw" className="max-w-full hidden xs:block"/>
                        <Typography variant="body1" className="text-themed-gray w-fit !tracking-[-0.02rem]"
                                    fontSize="16px">{translations("slogan")}
                        </Typography>
                    </Stack>
                    <Nav fontWeight={400} className="text-white !tracking-[-0.03rem]" fontSize={16} showCurrent={false}
                         linkContainerClassname="!justify-end" tight containerClassName="gap-[1.2rem]"/>
                </Stack>
                <img src={"/images/footer/digiuni-dark-purple.svg"} alt="Digiuni Logo"
                     className="max-w-[84dvw] mt-[8dvw] mb-[4dvw]
                     max-xs:!mb-[8dvw] max-xs:!mt-[12dvw]
                     max-md:mb-[6dvw] max-md:mt-[10dvw]
                     max-lg:max-w-[90dvw]
                     xl:max-w-[80dvw] xl:mt-[7dvw] xl:mb-[3dvw]
                     2xl:max-w-[82dvw]
                     3xl:mt-[5dvw] 3xl:mb-[2dvw]
                     "
                />
                <Typography variant="body2"
                            className="w-full min-h-fit text-themed-darker-gray py-[3dvw]
                            max-xs:!text-[12px]
                            xl:pb-[5dvw]
                            3xl:py-[2dvw]
                            " letterSpacing="normal" fontSize={14}>
                    {translations("copyright")}
                </Typography>
            </BaseWrapper>
        </>
    )
}