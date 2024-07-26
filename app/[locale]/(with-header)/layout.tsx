import React from "react";
import {unstable_setRequestLocale} from "next-intl/server";
import Header from "@/app/[locale]/(with-header)/header";
import {DefaultContainer} from "@/app/_util/components/default-container";
import DynamicBackwardsNav from "@/app/_util/components/dynamic-backwards-nav";
import Footer from "@/app/[locale]/_footer/footer";
import {Box} from "@mui/material";
import {BwTiles, SecondaryToBlackTiles} from "@/app/_util/components/tiles";

export default async function WithHeaderLayout({children, params}: {
    children: React.ReactNode,
    params: { locale: string }
}) {
    unstable_setRequestLocale(params.locale);
    return (
        <>
            <Header/>
            <Box className="h-[28dvw] lg:hidden"/>
            <DefaultContainer className="mb-[6dvh]">
                <DynamicBackwardsNav/>
            </DefaultContainer>
            {children}
            <Footer tiles={(
                <Box className="w-full">
                    <BwTiles className="hidden xs:block"/>
                    <SecondaryToBlackTiles className="xs:hidden"/>
                </Box>
            )}/>
        </>
    );
}