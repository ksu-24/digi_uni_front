import React, {useEffect} from "react";
import {Box, Input, InputLabel, Tooltip, Typography} from "@mui/material";
import {CloudUpload} from "@mui/icons-material";

const toBase64 = (file: Blob) : Promise<string | null> => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string | null);
    reader.onerror = reject;
});

const handleDrop = async (e: React.DragEvent, setPicture: (value: string | null) => void) => {
    e.preventDefault();
    for (const file of e.dataTransfer.files) {
        if (file.type.startsWith("image")) {
            setPicture(await toBase64(file));
        }
    }
};
const handleChange = async (e: React.ChangeEvent<HTMLInputElement>, setPicture: (value: string | null) => void) => {
    if (e.currentTarget.files && e.currentTarget.files[0]) {
        setPicture(await toBase64(e.currentTarget.files[0]));
    }
};

export const ImageDropzone = (
    {
        onPictureUpload = () => {},
        resetOnUpload = false,
        className = ""
    }: {
        onPictureUpload?: (picture: string) => void,
        resetOnUpload?: boolean,
        className?: string
    }) => {
    const [picture, setPicture] = React.useState(null as string | null);

    useEffect(() => {
        if (picture) {
            onPictureUpload(picture);
            if (resetOnUpload) {
                setPicture(null);
            }
        }
    }, [picture]);

    return (
        <Tooltip
            title={"Upload image"}
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
            <Box className={`w-full h-full flex items-center justify-center ${className}`}>
                <InputLabel
                    required
                    htmlFor="image-dropzone"
                    className="w-full h-full flex items-center justify-center hover:cursor-pointer"
                    onDrop={(e) => handleDrop(e, setPicture)}
                    onDragOver={(e) => e.preventDefault()}
                >
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
                    value={picture === null ? '' : undefined}
                    type="file"
                    name="image"
                    className="opacity-0 w-0"
                    onChange={(e) => handleChange(e as React.ChangeEvent<HTMLInputElement>, setPicture)}
                />
            </Box>
        </Tooltip>
    )
};