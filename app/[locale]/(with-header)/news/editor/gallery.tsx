"use client"

import {Box, IconButton, Stack} from "@mui/material";
import React, {useState} from "react";
import arrow from "@/public/images/commons/arrow.svg"
import Image from "next/image"

export function Gallery(
    {
        images
    }: {
        images: string[]
    }
) {
    const [currentImage, setCurrentImage] = React.useState(0);
    const [shownImages, setShownImages] =
        useState<number[]>(Array.from({length: Math.min(5, images.length)}).map((_, idx) => idx))
    return (
        <Stack className="w-full gap-6 items-center">
            <img src={images[currentImage]} alt="selected gallery image" width="100%" className="aspect-video"/>
            <Stack className="gap-6 items-center" direction="row">
                <IconButton onClick={() => {
                    if (shownImages.length !== images.length && currentImage === shownImages[0]) {
                        setShownImages((shownImages) => {
                            shownImages = shownImages.toSpliced(0, 1);
                            return [...shownImages, (shownImages[shownImages.length - 1] + 1 + images.length) % images.length]
                        })
                    }
                    setCurrentImage((currentImage - 1 + images.length) % images.length)
                }} className="relative">
                    <Image src={arrow} alt="arrow-left" width={16} className="object-contain scale-x-[-1]"/>
                </IconButton>
                <Stack direction="row" className="gap-6 h-[5dvw]">
                    {
                        shownImages.map((imageIdx, index) => (
                            <Box key={index} sx={{
                                opacity: imageIdx === currentImage ? 1 : 0.5
                            }} className="hover:cursor-pointer">
                                <img src={images[imageIdx]}
                                     alt="gallery image" onClick={() => setCurrentImage(imageIdx)} height="5dvw"
                                     className="w-auto h-[5dvw]"/>
                            </Box>
                        ))
                    }
                </Stack>
                <IconButton onClick={() => {
                    if (shownImages.length !== images.length && currentImage === shownImages[shownImages.length - 1]) {
                        setShownImages((shownImages) => {
                            shownImages = shownImages.toSpliced(-1, 1);
                            return [(shownImages[0] - 1 + images.length) % images.length, ...shownImages]
                        })
                    }
                    setCurrentImage((currentImage + 1) % images.length)
                }} className="relative">
                    <Image src={arrow} alt="arrow-right" width={16} className="object-contain"/>
                </IconButton>
            </Stack>
        </Stack>
    )
}