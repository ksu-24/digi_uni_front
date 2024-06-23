"use client"

import {Link, usePathname} from "@/app/_localization/navigation";
import {Stack, Typography} from "@mui/material";
import {useTranslations} from "next-intl";

export default function DynamicBackwardsNav() {
    const segments = ["main"].concat(usePathname().split("/").slice(1, -1));
    console.log(segments);
    const translations = useTranslations("nav");
    return (
        <Stack direction="row" className="backwards-nav">
            {
                segments.map((segment, index) => {
                    return (
                        <Link href={"/" + segments.slice(0, index + 1).join("/")} key={index}>
                            <Typography variant="caption" className="text-themed-light-gray hover:text-themed-darker-gray" fontWeight={500}>
                                {translations(segment as never) || segment}
                            </Typography>
                        </Link>
                    )
                })
            }
        </Stack>
    )
}