import {Box, Stack} from "@mui/material";
import LanguageToggle from "@/app/_util/components/language-toggle";
import Nav from "@/app/_util/components/nav";
import {Logo} from "@/app/[locale]/(with-header)/logo";

export default async function Header(
    {
        className = '',
        logoClassname = "",
        disableImage = false
    }: {
        className?: string,
        disableImage?: boolean,
        logoClassname?: string
    }
) {
    return (
        <Box className={
            `!hidden absolute top-0 left-0 w-dvw h-fit pt-[3.6dvw] px-[4.5dvw] z-40 !bg-transparent
            max-lg:pt-[1dvw]
            md:!block 
            xl:pt-[3dvw]
            2xl:pt-[2.5dvw]
            3xl:px-[4dvw] 3xl:w-full
            ${className}`} component="header">
            <Stack className="justify-between items-start w-full h-full max-lg:mt-[4dvw]" direction="row">
                {!disableImage && <Logo className={logoClassname}/>}
                <Stack direction="row" className="justify-end items-start w-fit h-full gap-[6dvw]
                xl:gap-[4dvw]
                3xl:gap-[3dvw]">
                    <LanguageToggle/>
                    <Nav fontSize={16}/>
                </Stack>
            </Stack>
        </Box>
    )
}