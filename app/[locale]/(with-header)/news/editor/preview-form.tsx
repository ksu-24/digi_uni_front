import FormWrapper from "@/app/_util/components/form-wrapper";
import {TextField, Typography} from "@mui/material";
import {ImageDropzone} from "@/app/_util/components/image-dropzone";
import themeObj from "@/app/_theme/theme-obj";
import React from "react";

export default function PreviewForm(
    {
        formRef,
    } : {
        formRef: React.MutableRefObject<HTMLFormElement | null>
    }
) {
    return (
        <FormWrapper onSubmit={async (e) => {
            e.preventDefault();
        }} formProps={{
            className: "items-center gap-4 !w-[16.65dvw]",
            ref: formRef as never
        }}>
            <Typography variant="h1">Preview</Typography>
            <ImageDropzone className="!h-[25dvh] border-[1px] border-black"/>
            <TextField label="Title" variant="standard" className="w-full" name="title" required style={{
                ...themeObj.typography.h4
            }}/>
            <TextField label="Description" required variant="standard" multiline className="w-full" name="summary" style={{
                ...themeObj.typography.body1
            }}/>
        </FormWrapper>
    )
}