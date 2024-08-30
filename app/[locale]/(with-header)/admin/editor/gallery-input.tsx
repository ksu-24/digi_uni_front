import {IconButton, Stack, Typography} from "@mui/material";
import {Add, Remove} from "@mui/icons-material";
import {ImageDropzone} from "@/app/_util/components/image-dropzone";

export default function GalleryInput(
    {
        images,
        setImages
    }: {
        images: (string | null)[],
        setImages: (images: (string | null)[] | ((images: (string | null)[]) => (string | null)[])) => void
    }
) {
    return (
        <Stack className="gap-6 items-center">
            <Typography variant="h1">Gallery</Typography>
            <Stack direction="row" className="gap-6 flex-wrap items-center">
                {
                    images.map((image, index) => (
                            <GalleryItem
                                key={index}
                                removeThis={() =>
                                    setImages(images.toSpliced(index, 1))
                                }
                                image={image}
                                setImage={(image) =>
                                    setImages(images.toSpliced(index, 1, image))
                                }
                            />
                        )
                    )
                }
                <IconButton onClick={() => setImages((images) => [...images, null])} className="h-fit">
                    <Add fontSize="large"/>
                </IconButton>
            </Stack>
        </Stack>
    )
}

function GalleryItem(
    {
        image,
        removeThis,
        setImage,
    }: {
        removeThis: () => void,
        setImage: (image: string) => void,
        image: (string | null)
    }
) {
    return (
        <Stack direction="row" className="relative flex-shrink-0">
            <IconButton
                className="!absolute top-0 left-0 h-fit shadow-2xl
                -translate-x-1/2 -translate-y-1/2 !bg-white hover:scale-110 hover:!bg-red-400 !border-[1px] !border-black"
                onClick={removeThis}>
                <Remove/>
            </IconButton>
            <ImageDropzone initialPicture={image} onPictureUpload={setImage} className="h-[15dvw] w-[15dvw]"/>
        </Stack>
    )
}