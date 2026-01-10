"use client"

import {Backdrop, Box, IconButton, Stack} from "@mui/material";
import React, {useEffect, useState} from "react";
import arrow from "@/public/images/commons/arrow-gallery.svg"
import Image from "next/image"
import useWindow from "@/app/_util/use-window";

const shownPerScreenSize = {
    766: 2,
    1440: 3,
    1780: 4,
    [Number.MAX_SAFE_INTEGER]: 5
}

export function Gallery(
    {
        images
    }: {
        images: string[]
    }
) {
    const [currentImage, setCurrentImage] = React.useState(0);
    const windowWidth = useWindow().innerWidth;
    const [maxShown, setMaxShown] =
        useState(
            Object.entries(shownPerScreenSize)
                .toSorted(([key1], [key2]) => parseInt(key1) - parseInt(key2))
                .find(([key]) => parseInt(key) > windowWidth)![1]
        )
    const [shownImages, setShownImages] =
        useState<number[]>(Array.from({length: Math.min(maxShown, images.length)}).map((_, idx) => idx))
    const [backdropOpen, setBackdropOpen] = useState(false);

    const wheelRef = React.useRef<HTMLDivElement>(null);
    const imageRefs = React.useRef(images.map(() => React.useRef<HTMLImageElement>()));

    function selectPrevious() {
        setCurrentImage((currentImage - 1 + images.length) % images.length)

        if (shownImages.length !== images.length && currentImage === shownImages[0]) {
            setShownImages((shownImages) => {
                shownImages = shownImages.toSpliced(-1, 1);
                return [(shownImages[0] - 1 + images.length) % images.length, ...shownImages]
            })
        }
    }

    function selectNext() {
        setCurrentImage((currentImage + 1) % images.length)

        if (shownImages.length !== images.length && currentImage === shownImages[shownImages.length - 1]) {
            setShownImages((shownImages) => {
                shownImages = shownImages.toSpliced(0, 1);
                return [...shownImages, (shownImages[shownImages.length - 1] + 1 + images.length) % images.length]
            })
        }
    }

    useEffect(() => {
        setMaxShown(
            Object.entries(shownPerScreenSize)
                .toSorted(([key1], [key2]) => parseInt(key1) - parseInt(key2))
                .find(([key]) => parseInt(key) > windowWidth)![1]
        )
    }, [windowWidth]);

    useEffect(() => {
        const lenDiff = maxShown - shownImages.length;

        if (lenDiff > 0) {
            if (shownImages[shownImages.length - 1] + lenDiff < images.length) {
                setShownImages((shownImages) =>
                    [...shownImages, ...Array.from({length: lenDiff}).map((_, idx) =>
                        shownImages[shownImages.length - 1] + idx + 1
                    )]
                )
            } else if (shownImages[shownImages.length - 1] - lenDiff >= 0) {
                setShownImages((shownImages) =>
                    [...Array.from({length: lenDiff}).map((_, idx) =>
                        (shownImages[shownImages.length - 1] - shownImages.length - idx - 1) % images.length
                    ), ...shownImages]
                )
            } else {
                setShownImages(Array.from({length: images.length}).map((_, idx) => idx))
            }
        } else {
            setShownImages((shownImages) =>
                shownImages.toSpliced(shownImages.length + lenDiff, -lenDiff)
            )
        }

    }, [maxShown]);

    return (
        <>
            <Stack className="w-full items-center gap-[2dvw] mt-[4dvw]
            max-xs:gap-[4dvw]
            3xl:mb-[6dvw] 3xl:gap-[1dvw]
            ">
                <button onClick={() => setBackdropOpen(true)} className="w-full">
                    <img src={images[currentImage]} alt="selected gallery image" width="100%" className="aspect-video object-contain"/>
                </button>
                <Stack className="items-center relative" direction="row" ref={wheelRef}>
                    {
                        images.map((image, index) => (
                            <img key={index} src={image} alt="gallery image" width={0} height={0}/>
                        ))
                    }
                    <Stack className="px-[2dvw] aspect-square justify-center
                        xl:px-[1.5dvw]
                        2xl:px-[1dvw]
                        ">
                        <IconButton onClick={selectPrevious} className="relative">
                            <Image src={arrow} alt="arrow-left" width={16} className="object-contain"/>
                        </IconButton>
                    </Stack>
                    <Stack direction="row" className="gap-[2dvw] overflow-x-hidden
                        xl:gap-[1.5dvw]
                        2xl:gap-[1dvw]
                        3xl:gap-[0.7dvw]
                        ">
                        {
                            shownImages.map((imageIdx, index) => (
                                <Box key={index} sx={{
                                    opacity: imageIdx === currentImage ? 1 : 0.5
                                }} className="hover:cursor-pointer shrink-0" ref={imageRefs.current[imageIdx]}>
                                    <img src={images[imageIdx]}
                                         alt="gallery image" onClick={() => setCurrentImage(imageIdx)} height="5dvw"
                                         className="w-auto h-[7dvw]
                                             max-xs:!h-[13dvw]
                                             max-lg:h-[8dvw]
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