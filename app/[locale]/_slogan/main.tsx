import {Box, Stack} from "@mui/material";
import {TextAndFunded} from "@/app/[locale]/_slogan/text-and-funded";
import {DigiuniLoading} from "@/app/[locale]/_slogan/digiuni-loading";
import {Social} from "@/app/_util/components/social";
import digipatternSecondary from "@/public/images/commons/digi-pattern-secondary.png"

export default async function Main() {
    return (
        <>
            <img src={digipatternSecondary.src} alt="Ellipse"
                 className="absolute shrink-0 w-[32dvw] right-0
                 max-xs:bottom-[7dvh]
                 max-lg:w-[56dvw]
                 lg:right-[4.5dvw]
                 xl:w-[35dvw] xl:right-[6dvw]
                 2xl:right-[9dvw]
                 3xl:w-[28dvw] 3xl:right-[7.5dvw]
                 "/>
            <Stack direction="row" className="items-center justify-start w-full
            max-lg:pt-[31px]
            xl:justify-between
            2xl:gap-[6dvw] 2xl:w-auto
            3xl:gap-[4dvw]">
                <TextAndFunded/>
                <DigiuniLoading/>
            </Stack>
            <Box className="hidden md:block xl:hidden z-10">
                <Social
                    className="absolute top-auto bottom-auto left-auto right-[4.5dvw] -translate-y-1/2 hidden lg:flex"/>
            </Box>
        </>
    );
}


