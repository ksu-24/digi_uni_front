import tiles from "@/public/images/main/slogan/tiles.png";
import {Box} from "@mui/material";
import Image from "next/image";

export default function Tiles() {
    return (
        <Box className="relative w-full h-[43dvh]">
            <Image src={tiles} alt={"Tiles"} fill style={{
                objectFit: "cover"
            }}/>
        </Box>
    )
}