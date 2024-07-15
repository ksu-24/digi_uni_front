import React, {useEffect, useState} from "react";
import {Box, Input, InputLabel, Tooltip, Typography} from "@mui/material";
import {CloudUpload} from "@mui/icons-material";

export const toBase64 = (file: Blob): Promise<string> => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        resolve(reader.result as string)
    };
    reader.onerror = reject;
});

const handleDrop = async (e: React.DragEvent, setPicture: (value: File | null) => void) => {
    e.preventDefault();
    for (const file of e.dataTransfer.files) {
        if (file.type.startsWith("image")) {
            setPicture(file);
        }
    }
};
const handleChange = async (e: React.ChangeEvent<HTMLInputElement>, setPicture: (value: File | null) => void) => {
    if (e.currentTarget.files && e.currentTarget.files[0]) {
        if (e.currentTarget.files[0].type.startsWith("image")) {
            setPicture(e.currentTarget.files[0]);
        }
    }
};

export const ImageDropzone = (
    {
        onPictureUpload = () => {
        },
        resetOnUpload = false,
        className = "",
        initialPicture = null
    }: {
        onPictureUpload?: (picture: string) => void,
        resetOnUpload?: boolean,
        className?: string,
        initialPicture?: string | null
    }) => {
    const [picture, setPicture] = React.useState(null as File | null);

    useEffect(() => {
        if (picture) {
            toBase64(picture).then(pic => {
                if (pic) {
                    onPictureUpload(pic);
                }
            }).then(() => {
                if (resetOnUpload) {
                    setPicture(null);
                } else {
                    setPicture(picture);
                }
            });
        }
    }, [picture]);

    function evaluateURL() {
        return picture ? URL.createObjectURL(picture) : initialPicture ? initialPicture : undefined;
    }

    const [url, setUrl] =useState(evaluateURL());

    useEffect(() => {
        setUrl(evaluateURL());
    }, [picture, initialPicture]);

    return (
        <Tooltip
            title="Upload image"
            followCursor={true}
            PopperProps={{
                modifiers: [
                    {
                        name: "offset",
                        options: {offset: [50, 0]}
                    }
                ]
            }}
        >
            <Box className={`w-full h-full flex items-center justify-center ${className}`} style={
                url ? {
                    backgroundImage: `url(${url})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                } : {}
            }>
                <InputLabel
                    required
                    htmlFor="image-dropzone"
                    className="w-full h-full flex items-center justify-center hover:cursor-pointer"
                    onDrop={(e) => handleDrop(e, setPicture)}
                    onDragOver={(e) => e.preventDefault()}>
                    <Box className="flex flex-col gap-2 bg-white bg-opacity-85 justify-center items-center rounded-3xl">
                        <CloudUpload fontSize="large"/>
                        <Typography variant="caption" className="w-4/5 text-wrap text-center">
                            Drop your image here
                        </Typography>
                    </Box>
                </InputLabel>
                <Input
                    required
                    id="image-dropzone"
                    value={picture === null ? "" : undefined}
                    type="file"
                    name="image"
                    className="opacity-0 w-0"
                    onChange={(e) => handleChange(e as React.ChangeEvent<HTMLInputElement>, setPicture)}
                />
            </Box>
        </Tooltip>
    )
};