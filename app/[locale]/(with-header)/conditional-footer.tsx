"use client"

import Footer from "@/app/[locale]/_footer/footer";
import {Box} from "@mui/material";
import {BwTiles, SecondaryToBlackTiles} from "@/app/_util/components/tiles";
import React from "react";
import {usePathname} from "@/app/_localization/navigation";
import {useTranslations} from "next-intl";

const secondaryTilesPathnames = [
    "/news",
    "/news/\\d+",
]


export default function ConditionalFooter() {
    const pathname = usePathname();
    const isSecondary = secondaryTilesPathnames.some((path) => new RegExp(path).test(pathname));
    return (
        <Footer tiles={(
            <Box className={"w-full " + isSecondary ? "max-xs:!bg-secondary" : ""}>
                {
                    isSecondary ? <BwOrSecondaryTiles/> : <BwTiles/>
                }
            </Box>
        )} translations={useTranslations("misc") as never}/>
    )
}

function BwOrSecondaryTiles() {
    return (
        <>
            <BwTiles className="hidden xs:block"/>
            <SecondaryToBlackTiles className="xs:hidden"/>
        </>
    )
}