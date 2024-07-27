import React from "react";
import {unstable_setRequestLocale} from "next-intl/server";
import Header from "@/app/[locale]/(with-header)/header";
import {DefaultWrapper} from "@/app/_util/components/default-wrapper";
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
            <DefaultWrapper className="mb-[6dvh]">
                <DynamicBackwardsNav/>
            </DefaultWrapper>
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