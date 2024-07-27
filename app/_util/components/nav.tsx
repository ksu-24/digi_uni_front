"use client"

import links from '@/resources/links.json'
import {useTranslations} from "next-intl";
import {Box, Fade, Stack, Typography} from "@mui/material";
import {Link, usePathname} from "@/app/_localization/navigation";
import {body1Font} from "@/app/_theme/theme-obj";
import EnterAnimation from "@/app/_util/components/enter-animation";

export default function Nav(
    {
        exclude = [],
        fontWeight = 500,
        fontSize = 18,
        className = "",
        containerClassName = "",
        showCurrent = true,
        linkContainerClassname = ""
    }: {
        exclude?: string[],
        className?: string,
        fontWeight?: number,
        fontSize?: number | string,
        containerClassName?: string,
        showCurrent?: boolean,
        linkContainerClassname?: string
    }
) {
    const translations = useTranslations("nav");
    const path = usePathname();
    return (
        <Box className={containerClassName} component="nav">
            <Stack component="ul" className="justify-between items-end flex-nowrap">
                {Object.entries(links).filter(e => !exclude.includes(e[0])).map((link, index) => (
                    <Stack className={linkContainerClassname + ` w-fit h-fit items-center gap-6`}
                           direction="row" key={index} component={"li"}>
                        {
                            path === link[1] && showCurrent ? (
                                <Fade in={true} timeout={500} easing="ease-out" style={{
                                    transitionDelay: `${index * 200}ms`
                                }}>
                                    <svg width="27" height="14" viewBox="0 0 220 82" fill="currentColor"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M220 35V47H208V58H196V46H0V36H196V24H208V35H220Z"
                                              fill="currentColor"></path>
                                        <path d="M196 12H184V24H196V12Z" fill="currentColor"></path>
                                        <path d="M184 0H172V12H184V0Z" fill="currentColor"></path>
                                        <path d="M196 58H184V70H196V58Z" fill="currentColor"></path>
                                        <path d="M184 70H172V82H184V70Z" fill="currentColor"></path>
                                    </svg>
                                </Fade>
                            ) : <Box className="w-[27px] h-[14px]"/>
                        }
                        <EnterAnimation direction="left" duration={500} delay={index * 200} offset={20} key={index}
                                        className="h-8">
                            <Link href={link[1]} className="h-full flex items-center">
                                <Typography variant="h6"
                                            fontSize={fontSize}
                                            fontWeight={fontWeight}
                                            letterSpacing="-0.32px"
                                            fontFamily={body1Font}
                                            className={`${className} text-black hover:font-[600]`}>{translations(link[0] as never)}</Typography>
                            </Link>
                        </EnterAnimation>
                    </Stack>
                ))}
            </Stack>
        </Box>
    )
}