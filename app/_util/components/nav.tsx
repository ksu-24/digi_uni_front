"use client"

import links from '@/resources/links.json'
import {useTranslations} from "next-intl";
import {Fade, Stack, Typography} from "@mui/material";
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
        <Stack className={containerClassName + " gap-4 justify-start items-end"} component="nav">
            {Object.entries(links).filter(e => !exclude.includes(e[0])).map((link, index) => (
                <Stack className={linkContainerClassname + " w-fit h-fit justify-between items-center gap-4"}
                       direction="row" key={index}>
                    {
                        path === link[1] && showCurrent && (
                            <Fade in={true} timeout={500} easing="ease-out" style={{
                                transitionDelay: `${index * 200}ms`
                            }}>
                                <hr className="w-10 h-px text-black bg-black border-0 mt-0.5"/>
                            </Fade>
                        )
                    }
                    <EnterAnimation direction="left" duration={500} delay={index * 200} offset={20} key={index}
                                    className="flex justify-end">
                        <Link href={link[1]}>
                            <Typography variant="h6"
                                        fontSize={fontSize}
                                        fontWeight={fontWeight}
                                        letterSpacing="-0.03rem"
                                        fontFamily={body1Font}
                                        className={`${className} text-black hover:font-[600]`}>{translations(link[0] as never)}</Typography>
                        </Link>
                    </EnterAnimation>
                </Stack>
            ))}
        </Stack>
    )
}