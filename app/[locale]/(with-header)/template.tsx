import React from "react";
import {unstable_setRequestLocale} from "next-intl/server";
import Header from "@/app/[locale]/(with-header)/header";
import Footer from "@/app/[locale]/_footer/footer";
import {Box} from "@mui/material";
import {BwTiles} from "@/app/_util/components/tiles";
import ConditionalFooter from "@/app/[locale]/(with-header)/conditional-footer";

export default async function WithHeaderLayout({children}: {
    children: React.ReactNode,
}) {
    return (
        <>
            <Header/>
            {children}
            <ConditionalFooter/>
        </>
    );
}