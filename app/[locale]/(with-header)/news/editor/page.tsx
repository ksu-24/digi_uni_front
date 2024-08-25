import React from "react";
import {BaseWrapper} from "@/app/_util/components/wrappers";
import Editor from "@/app/[locale]/(with-header)/news/editor/editor";
import {Stack} from "@mui/material";

export default function Page() {
    return (
        <Stack className="pt-[25dvh] gap-10">
            <BaseWrapper disableGap>
                <Editor/>
            </BaseWrapper>
        </Stack>
    )
}