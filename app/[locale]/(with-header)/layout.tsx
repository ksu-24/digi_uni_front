import React from "react";
import {unstable_setRequestLocale} from "next-intl/server";
import Header from "@/app/[locale]/(with-header)/header";

export default async function WithHeaderLayout({children, params}: { children: React.ReactNode, params: {locale: string} }) {
    unstable_setRequestLocale(params.locale);
    return (
        <>
            <Header />
            {children}
        </>
    );
}