"use client"

import links from '@/resources/links.json'
import {useTranslations} from "next-intl";
import {Stack, Typography} from "@mui/material";
import {Link, usePathname} from "@/app/_localization/navigation";
import {body1Font} from "@/app/[locale]/theme-obj";

export default function Nav(
    {
        exclude = [],
        fontWeight = 500,
        className = ""
    }: {
        exclude?: string[],
        className?: string,
        fontWeight?: number
    }
) {
    const translations = useTranslations("nav");
    const path = usePathname();
    return (
        <Stack className="justify-start items-end gap-4" component="nav">
            {Object.entries(links).filter(e => !exclude.includes(e[0])).map((link, index) => (
                <Stack className="w-fit h-fit justify-between items-center gap-4" direction="row" key={index}>
                    {
                        path === link[1] && (
                            <hr className="w-10 h-px text-black bg-black border-0 mt-0.5" />
                        )
                    }
                    <Link href={link[1]}>
                        <Typography variant="h6"
                                    fontSize={18}
                                    fontWeight={fontWeight}
                                    letterSpacing="-0.03rem"
                                    fontFamily={body1Font}
                                    className={`${className} text-black hover:font-[600]`}>{translations(link[0] as never)}</Typography>
                    </Link>
                </Stack>
            ))}
        </Stack>
    )
}