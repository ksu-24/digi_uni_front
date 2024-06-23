import {getTranslations} from "next-intl/server";
import {Box, Stack, Typography} from "@mui/material";
import Image from "next/image";
import fundedByEU from "@/public/images/main/slogan/funded-by-eu.png";

export async function TextAndFunded() {
    const translation = await getTranslations("main.slogan");
    const miscTranslation = await getTranslations("misc");
    return (
        <Stack gap="40px" className="justify-center items-start h-4/5 w-3/5 min-w-1/2 mt-[-6%]">
            <Typography variant="body1" className="text-wrap whitespace-pre-line">
                {miscTranslation("slogan")}
            </Typography>
            <Typography variant="h1">
                {translation("creatingFirst")}
            </Typography>
            <Box className="relative w-1/2 h-[10%]">
                <Image src={fundedByEU} alt="Funded by EU" fill style={{
                    objectFit: "contain",
                    objectPosition: "left"
                }}/>
            </Box>
        </Stack>
    )
}