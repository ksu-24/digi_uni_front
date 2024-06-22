import secondaryTiles from "@/public/images/secondary-tiles.png";
import infoTiles from "@/public/images/info-tiles.png";
import {Box} from "@mui/material";
import Image from "next/image";

export function SecondaryTiles() {
    return (
        <Box className="relative w-full h-[60dvh]">
            <Image src={secondaryTiles} alt={"Tiles"} fill style={{
                objectFit: "cover"
            }}/>
        </Box>
    )
}

export function InfoTiles() {
    return (
        <Box className="relative w-full h-[55dvh] bg-info">
            <Image src={infoTiles} alt={"Tiles"} fill style={{
                objectFit: "cover"
            }}/>
        </Box>
    )
}