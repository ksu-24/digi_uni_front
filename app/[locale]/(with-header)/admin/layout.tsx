"use client"

import {isLoggedIn} from "@/app/_util/auth";
import Login from "@/app/[locale]/(with-header)/admin/login";
import React from "react";
import {Box, NoSsr} from "@mui/material";
import {PageTopWrapper} from "@/app/_util/components/wrappers";

export default function AuthOnly({children}: { children: React.ReactNode }) {
    return (
        <NoSsr fallback={<Box className="h-dvh"/>}>
            <Body>
                {children}
            </Body>
        </NoSsr>
    );
}

function Body(props: { children: React.ReactNode }) {
    return <>{!isLoggedIn() ? <Login/> : <PageTopWrapper>{props.children}</PageTopWrapper>}</>;
}