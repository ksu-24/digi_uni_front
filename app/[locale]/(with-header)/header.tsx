import {Box, Stack} from "@mui/material";
import LanguageToggle from "@/app/_util/components/language-toggle";
import Nav from "@/app/_util/components/nav";
import {Logo} from "@/app/[locale]/(with-header)/logo";
import EnterAnimation from "@/app/_util/components/enter-animation";

export default async function Header(
    {
        className = '',
        logoClassname = "",
        disableImage = false,
        hideFundedByEU = false,
        animateFundedByEU = false
    }: {
        className?: string,
        disableImage?: boolean,
        logoClassname?: string,
        hideFundedByEU?: boolean,
        animateFundedByEU?: boolean
    }
) {
    const fundedByEULogo = (
        <img
            src="/images/main/slogan/funded-by-eu.png"
            alt="Co-funded by the European Union"
            className="h-[3dvw] w-auto
            max-xs:h-[8dvw]
            max-md:h-[5dvw]
            max-lg:h-[4dvw]
            xl:h-[2.5dvw]
            3xl:h-[2dvw]
            "
        />
    );

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
                <Stack direction="row" className="items-start gap-[2dvw] xl:gap-[1.5dvw] 3xl:gap-[1dvw]">
                    {!disableImage && <Logo className={logoClassname}/>}
                    {!hideFundedByEU && (
                        animateFundedByEU ? (
                            <EnterAnimation direction="right" offset={20} duration={1000} fadeDuration={400}>
                                {fundedByEULogo}
                            </EnterAnimation>
                        ) : fundedByEULogo
                    )}
                </Stack>
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