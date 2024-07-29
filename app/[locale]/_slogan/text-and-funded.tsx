import {getTranslations} from "next-intl/server";
import {Box, Stack, Typography} from "@mui/material";
import Image from "next/image";
import screens from "@/resources/screens.json"
import fundedByEU from "@/public/images/main/slogan/funded-by-eu.png";
import EnterAnimation from "@/app/_util/components/enter-animation";
import {MainHeading} from "@/app/_util/components/text-templates";

export async function TextAndFunded() {
    const translation = await getTranslations("main.slogan");
    const miscTranslation = await getTranslations("misc");
    return (
        <Stack className="justify-center items-start gap-[3.5rem]
        max-xs:!gap-[3rem]
        max-md:gap-[8dvw]
        max-lg:w-full max-lg:gap-[8dvw]
        xl:max-w-[48dvw] xl:gap-[3.5dvw]
        2xl:!max-w-[43dvw] 2xl:!gap-[5dvw]
        3xl:!max-w-[31dvw]
        ">
            <Stack className="gap-[2rem]
            max-xs:!gap-[6dvw]
            max-lg:gap-[4dvw]
            2xl:gap-[3dvw]
            ">
                <EnterAnimation direction="down" duration={600} delay={300} offset={20}>
                    <Typography variant="body1" sx={{
                        [`@media (max-width: ${screens.md})`]: {
                            letterSpacing: "-0.48px"
                        }
                    }}>
                        {miscTranslation("slogan")}
                    </Typography>
                </EnterAnimation>
                <EnterAnimation direction="up" offset={20}>
                    <MainHeading>
                        {translation("creatingFirst")}
                    </MainHeading>
                </EnterAnimation>
            </Stack>
            <EnterAnimation direction="up" duration={600} delay={300} offset={20}
                            className="h-[10%]">
                <Box className="relative w-[52dvw] h-full
                xs:w-[34dvw]
                md:!w-[27dvw]
                lg:!w-[20dvw]
                xl:!w-[17dvw]
                2xl:!w-[15dvw]
                3xl:!w-[12dvw]
                ">
                    <Image src={fundedByEU} alt="Funded by EU" fill style={{
                        objectFit: "contain",
                        aspectRatio: `${fundedByEU.width}/${fundedByEU.height}`
                    }} className="!h-auto !relative"/>
                </Box>
            </EnterAnimation>
        </Stack>
    )
}