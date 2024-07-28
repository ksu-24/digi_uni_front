import React from "react";
import {BaseWrapper} from "@/app/_util/components/base-wrapper";
import Editor from "@/app/[locale]/(with-header)/news/editor/editor";

export default function Page() {
    return (
        <BaseWrapper>
            <Editor/>
        </BaseWrapper>
    )
}