"use client"

import React from "react";
import dynamic from "next/dynamic";
import {Typography} from "@mui/material";

const Editor = dynamic(
    () => import("@/app/[locale]/(with-header)/news/editor/editor").then((module) => module.default),
    {
        ssr: false,
        loading: () => <Typography>Loading...</Typography>
    })

export default function Page() {
    return (
        <Editor/>
    )
}

