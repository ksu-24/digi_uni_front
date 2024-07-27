import React from "react";
import {DefaultWrapper} from "@/app/_util/components/default-wrapper";
import Editor from "@/app/[locale]/(with-header)/news/editor/editor";

export default function Page() {
    return (
        <DefaultWrapper>
            <Editor/>
        </DefaultWrapper>
    )
}