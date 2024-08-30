import React from "react";
import {BaseWrapper} from "@/app/_util/components/wrappers";
import Editor from "@/app/[locale]/(with-header)/admin/editor/editor";
import {Stack} from "@mui/material";

export default function Page() {
    return (
        <Stack className="gap-10">
            <BaseWrapper disableGap>
                <Editor/>
            </BaseWrapper>
        </Stack>
    )
}