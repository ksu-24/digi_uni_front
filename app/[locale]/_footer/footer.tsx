import {BaseWrapper} from "@/app/_util/components/base-wrapper";
import {Stack, Typography} from "@mui/material";
import {getTranslations} from "next-intl/server";
import Nav from "@/app/_util/components/nav";
import React from "react";


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
                         className="bg-themed-darkgray h-fit min-h-[80dvh] w-full pt-[12dvh] pb-[6dvh] justify-between">
                <Stack direction="row" className="min-h-fit justify-between items-center">
                    <Typography variant="body1" className="text-themed-gray w-fit"
                                fontSize="16px">{translations("slogan")}</Typography>
                    <Nav fontWeight={400} className="text-white" fontSize={16} showCurrent={false} linkContainerClassname="w-20 !justify-end"/>
                </Stack>
                <img src={"/images/footer/digiuni-dark-purple.svg"} alt="Digiuni Logo"/>
                <Typography variant="body2" className="w-full min-h-fit text-themed-darker-gray xs:!font-[14px]" fontSize="12px">
                    {translations("copyright")}
                </Typography>
            </BaseWrapper>
        </>
    )
}