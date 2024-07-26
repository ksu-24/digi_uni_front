import React from "react";
import {DefaultContainer} from "@/app/_util/components/default-container";
import Editor from "@/app/[locale]/(with-header)/news/editor/editor";

export default function Page() {
    return (
        <DefaultContainer>
            <Editor/>
        </DefaultContainer>
    )
}