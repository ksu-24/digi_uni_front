import {Box, Stack, Typography} from "@mui/material";
import {BaseWrapper} from "@/app/_util/components/wrappers";
import {getTranslations} from "next-intl/server";
import screens from "@/resources/screens.json"

export async function Banner() {
    const translations = await getTranslations("about.banner")
    return (
        <>
            <Box bgcolor="info.main" className="mt-[12dvw] relative py-[2dvw]
                max-xs:!pt-[20dvw] max-xs:pb-[12dvw]
                max-md:py-[4dvw]
                xl:py-0
                3xl:mt-[7dvw]
                ">
                <img src="/images/about/banner-corner-tiles.svg" alt="corner tiles" className="absolute w-[15dvw] hidden
                    xs:block
                    2xl:w-[14dvw]
                    3xl:w-[12dvw]
                    "/>
                <BaseWrapper disableGap className="
                max-lg:px-[7dvw]
                ">
                    <Stack className="ml-[3dvw] mr-[2dvw] items-center justify-between
                        max-xs:gap-[12dvw]
                        max-lg:mx-0
                        xs:!flex-row
                        xl:ml-[2dvw] xl:mr-[1dvw]
                        2xl:my-[1dvw] 2xl:mx-[4dvw]
                        3xl:mx-[3dvw]
                        " direction="column">
                        <Typography variant="h1" className="!text-[46px] w-[42dvw] tracking-normal
                        max-lg:!text-[32px] max-lg:w-auto
                        xl:!text-[42px] xl:w-auto
                        2xl:!text-[48px] 2xl:w-[34dvw]
                        3xl:w-[27dvw]
                        " sx={{
                            maxWidth: "39dvw",
                            [`@media (max-width: ${screens.lg})`]: {
                                maxWidth: "46dvw"
                            },
                            [`@media (max-width: ${screens.md})`]: {
                                maxWidth: "none"
                            },
                        }}>
                            {translations("text")}
                        </Typography>
                        <img src="/images/about/banner-woman.webp" alt="woman" className="w-[34dvw] mt-[1dvw]
                            max-xs:w-full
                            2xl:w-[33dvw]
                            3xl:w-[23dvw]
                            "/>
                    </Stack>
                </BaseWrapper>
            </Box>
        </>
    )
}