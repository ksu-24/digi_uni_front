"use client"

import {Backdrop, Box, IconButton, Stack} from "@mui/material";
import React, {useState} from "react";
import arrow from "@/public/images/commons/arrow-gallery.svg"
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
    const [backdropOpen, setBackdropOpen] = useState(false);

    function selectPrevious() {
        if (shownImages.length !== images.length && currentImage === shownImages[0]) {
            setShownImages((shownImages) => {
                shownImages = shownImages.toSpliced(0, 1);
                return [...shownImages, (shownImages[shownImages.length - 1] + 1 + images.length) % images.length]
            })
        }
        setCurrentImage((currentImage - 1 + images.length) % images.length)
    }

    function selectNext() {
        if (shownImages.length !== images.length && currentImage === shownImages[shownImages.length - 1]) {
            setShownImages((shownImages) => {
                shownImages = shownImages.toSpliced(-1, 1);
                return [(shownImages[0] - 1 + images.length) % images.length, ...shownImages]
            })
        }
        setCurrentImage((currentImage + 1) % images.length)
    }

    return (
        <>
            <Stack className="w-full items-center gap-[2dvw] mt-[4dvw]
        3xl:mb-[6dvw] 3xl:gap-[1dvw]
        ">
                <button onClick={() => setBackdropOpen(true)}>
                    <img src={images[currentImage]} alt="selected gallery image" width="100%" className="aspect-video"/>
                </button>
                <Stack className="items-center" direction="row">
                    <Stack className="px-[2dvw] aspect-square justify-center
                        xl:px-[1.5dvw]
                        2xl:px-[1dvw]
                        ">
                        <IconButton onClick={selectPrevious} className="relative">
                            <Image src={arrow} alt="arrow-left" width={16} className="object-contain"/>
                        </IconButton>
                    </Stack>
                    <Stack direction="row" className="gap-[2dvw]
                        xl:gap-[1.5dvw]
                        2xl:gap-[1dvw]
                        3xl:gap-[0.7dvw]
                        ">
                        {
                            shownImages.map((imageIdx, index) => (
                                <Box key={index} sx={{
                                    opacity: imageIdx === currentImage ? 1 : 0.5
                                }} className="hover:cursor-pointer">
                                    <img src={images[imageIdx]}
                                         alt="gallery image" onClick={() => setCurrentImage(imageIdx)} height="5dvw"
                                         className="w-auto h-[7dvw]
                                             xl:h-[6dvw]
                                             2xl:h-[5dvw]
                                             3xl:h-[4dvw]
                                             "/>
                                </Box>
                            ))
                        }
                    </Stack>
                    <Stack className="px-[2dvw] aspect-square justify-center
                        xl:px-[1.5dvw]
                        2xl:px-[1dvw]
                        ">
                        <IconButton onClick={selectNext} className="relative">
                            <Image src={arrow} alt="arrow-right" width={16} className=" object-contain scale-x-[-1]"/>
                        </IconButton>
                    </Stack>
                </Stack>
            </Stack>
            <FullscreenBackdrop
                selectNext={selectNext}
                selectPrevious={selectPrevious}
                image={images[currentImage]}
                open={backdropOpen}
                close={() => setBackdropOpen(false)}/>
        </>
    )
}

function FullscreenBackdrop(
    {
        selectNext,
        selectPrevious,
        image,
        open,
        close
    }: {
        selectNext: () => void,
        selectPrevious: () => void,
        image: string,
        open: boolean,
        close: () => void
    }
) {
    return (
        <Backdrop className="z-[5000]"
                  open={open}
                  onClick={close}>
            <Stack direction="row" className="items-center justify-between p-[3dvw] xs:px-[5dvw] md:px-[10dvw]">
                <IconButton onClick={(e) => {
                    e.stopPropagation();
                    selectPrevious();
                }} className="relative p-[3dvw] max-xs:hidden">
                    <Image src={arrow} alt="arrow-left" width={128} className="object-contain
                    max-lg:w-16
                    "/>
                </IconButton>
                <img src={image} alt="selected gallery image" className="aspect-video w-[50%] max-xs:!w-full"/>
                <IconButton onClick={(e) => {
                    e.stopPropagation();
                    selectNext();
                }} className="relative p-[3dvw] max-xs:hidden">
                    <Image src={arrow} alt="arrow-right" width={128} className=" object-contain scale-x-[-1]

                    max-lg:w-16
                    "/>
                </IconButton>
            </Stack>
        </Backdrop>
    )
}