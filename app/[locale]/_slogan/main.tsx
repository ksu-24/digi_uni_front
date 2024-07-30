import {Box, Stack} from "@mui/material";
import {TextAndFunded} from "@/app/[locale]/_slogan/text-and-funded";
import {DigiuniLoading} from "@/app/[locale]/_slogan/digiuni-loading";
import {Social} from "@/app/_util/components/social";

export default async function Main() {
    return (
        <>
            <Box
                className="absolute shrink-0 w-[32dvw] right-0
                 max-xs:bottom-[7dvh]
                 max-lg:w-[56dvw]
                 lg:right-[4.5dvw]
                 xl:w-[35dvw] xl:right-[6dvw]
                 2xl:right-[9dvw]
                 3xl:w-[28dvw] 3xl:right-[7.5dvw]
                 ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 568 568" fill="none" className="w-full">
                    <path d="M454.243 113.437L454.243 340.708L568.001 340.708L568.001 113.437L454.243 113.437Z"
                          fill="#F4F5D1"/>
                    <path d="M226.663 113.238L226.663 340.508L340.421 340.508L340.421 113.238L226.663 113.238Z"
                          fill="#F4F5D1"/>
                    <path d="M113.534 568L341.05 568L341.05 454.365L113.534 454.365L113.534 568Z" fill="#F4F5D1"/>
                    <path d="M113.104 340.533L340.62 340.533L340.62 226.898L113.104 226.898L113.104 340.533Z"
                          fill="#F4F5D1"/>
                    <path d="M341.018 340.419L341.018 454.054L454.776 454.054L454.776 340.418L341.018 340.419Z"
                          fill="#F4F5D1"/>
                    <path d="M-4.96715e-06 113.448L0 227.083L113.758 227.083L113.758 113.448L-4.96715e-06 113.448Z"
                          fill="#F4F5D1"/>
                    <path
                        d="M113.767 0.000100021L113.767 113.635L227.525 113.635L227.525 9.50485e-05L113.767 0.000100021Z"
                        fill="#F4F5D1"/>
                </svg>
            </Box>
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


