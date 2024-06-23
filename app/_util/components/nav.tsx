"use client"

import links from '@/resources/links.json'
import {useTranslations} from "next-intl";
import {Stack, Typography} from "@mui/material";
import {Link, usePathname} from "@/app/_localization/navigation";

export default function Nav(
    {
        exclude = [],
        className = ""
    }: {
        exclude?: string[],
        className?: string
    }
) {
    const translations = useTranslations("nav");
    const path = usePathname();
    return (
        <Stack className="justify-center items-end gap-2 w-[10dvw]" component="nav">
            {Object.entries(links).filter(e => !exclude.includes(e[0])).map((link, index) => (
                <Stack className="w-fit h-fit justify-between items-center gap-2" direction="row">
                    {
                        path === link[1] && (
                            <hr className="w-10 h-px text-black bg-black border-0 mt-0.5" />
                        )
                    }
                    <Link key={index} href={link[1]}>
                        <Typography variant="h6"
                                    fontSize={16}
                                    className={`${className} text-black hover:font-[600]`}>{translations(link[0] as never)}</Typography>
                    </Link>
                </Stack>
            ))}
        </Stack>
    )
}