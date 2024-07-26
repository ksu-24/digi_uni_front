import FormWrapper from "@/app/_util/components/form-wrapper";
import {TextField, Typography} from "@mui/material";
import {ImageDropzone} from "@/app/_util/components/image-dropzone";
import themeObj from "@/app/_theme/theme-obj";
import React, {useEffect} from "react";

export default function PreviewForm(
    {
        key1,
        setPreview,
        initialState
    } : {
        key1: string,
        setPreview: (preview: {
            title: string,
            image: string
        }) => void,
        initialState: {
            title?: string,
            image?: string
        }
    }
) {
    const [title, setTitle] = React.useState<string>(initialState.title ?? "");
    const [image, setImage] = React.useState<string | null>(initialState.image ?? null);

    useEffect(() => {
        if (localStorage.getItem(`editorState-preview-title-${key1}`)) {
            setTitle(localStorage.getItem(`editorState-preview-title-${key1}`) as string);
        }
        if (localStorage.getItem(`editorState-preview-image-${key1}`)) {
            setImage(localStorage.getItem(`editorState-preview-image-${key1}`));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(`editorState-preview-title-${key1}`, title);
    }, [title]);

    useEffect(() => {
        if (image) {
            localStorage.setItem(`editorState-preview-image-${key1}`, image)
        } else {
            localStorage.removeItem(`editorState-preview-image-${key1}`);
        }
    }, [image]);

    useEffect(() => {
        setPreview({
            title,
            image: image ?? ""
        });
    }, [title, image]);

    return (
        <FormWrapper onSubmit={async (e) => {
            e.preventDefault();
        }} formProps={{
            className: "items-center gap-4 !w-[16.65dvw]"
        }}>
            <Typography variant="h1">Preview</Typography>
            <ImageDropzone className="!h-[25dvh] border-[1px] border-black" onPictureUpload={(picture) => setImage(picture)} initialPicture={image}/>
            {/* @ts-ignore */}
            <TextField value={title} label="Title" variant="standard" className="w-full" name="title" required style={{
                ...themeObj.typography.h4
            }} onChange={e => setTitle(e.target.value)}/>
        </FormWrapper>
    )
}