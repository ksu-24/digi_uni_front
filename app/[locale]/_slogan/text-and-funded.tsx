import {getTranslations} from "next-intl/server";
import {Box, Stack, Typography} from "@mui/material";
import Image from "next/image";
import fundedByEU from "@/public/images/main/slogan/funded-by-eu.png";
import EnterAnimation from "@/app/_util/components/enter-animation";

export async function TextAndFunded() {
    const translation = await getTranslations("main.slogan");
    const miscTranslation = await getTranslations("misc");
    return (
        <Stack gap="40px" className="justify-center items-start h-4/5 mt-[-6%]">
            <EnterAnimation direction="down" duration={600} delay={300} offset={20}>
                <Typography variant="body1" className="text-wrap whitespace-pre-line">
                    {miscTranslation("slogan")}
                </Typography>
            </EnterAnimation>
            <EnterAnimation direction="up" offset={20}>
                <Typography variant="h1" className="flex-grow-0 w-fit">
                    {translation("creatingFirst")}
                </Typography>
            </EnterAnimation>
            <EnterAnimation direction="up" duration={600} delay={300} offset={20} className="w-[52dvw] xs:w-[34dvw] md:w-[27dvw] lg:w-[20dvw] h-[10%]">
                <Box className="relative w-full h-full">
                    <Image src={fundedByEU} alt="Funded by EU" fill style={{
                        objectFit: "contain",
                        objectPosition: "left"
                    }}/>
                </Box>
            </EnterAnimation>
        </Stack>
    )
}