import React from "react";
import HeaderWrapper from "@/app/[locale]/(with-header)/header-wrapper";

import ConditionalFooter from "@/app/[locale]/(with-header)/conditional-footer";

export default async function WithHeaderLayout({children}: {
    children: React.ReactNode,
}) {
    return (
        <>
            <HeaderWrapper/>
            {children}
            <ConditionalFooter/>
        </>
    );
}