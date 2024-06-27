import React from "react";
import {unstable_setRequestLocale} from "next-intl/server";
import Header from "@/app/[locale]/(with-header)/header";
import {DefaultContainer} from "@/app/_util/components/default-container";
import DynamicBackwardsNav from "@/app/_util/components/dynamic-backwards-nav";
import Footer from "@/app/[locale]/_footer/footer";
import {BwTiles} from "@/app/_util/components/tiles";

export default async function WithHeaderLayout({children, params}: {
    children: React.ReactNode,
    params: { locale: string }
}) {
    unstable_setRequestLocale(params.locale);
    return (
        <>
            <Header/>
            <DefaultContainer>
                <DynamicBackwardsNav/>
                {children}
            </DefaultContainer>
            <Footer tiles={<BwTiles/>}/>
        </>
    );
}