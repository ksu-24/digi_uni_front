"use client"

import {Link, usePathname} from "@/app/_localization/navigation";
import {Stack, Typography} from "@mui/material";
import {useTranslations} from "next-intl";
import EnterAnimation from "@/app/_util/components/enter-animation";

export default function DynamicBackwardsNav() {
    const segments = ["main"].concat(usePathname().split("/").slice(1, -1));
    const translations = useTranslations("nav");
    return (
        <EnterAnimation direction="up" offset={0} duration={400} delay={800}>
            <Stack direction="row" className="backwards-nav text-themed-gray">
                {
                    segments.map((segment, index) => {
                        return (
                            <Link href={"/" + segments.slice(0, index + 1).map(s => {
                                return s === "main" ? "" : s;
                            }).join("/")} key={index}>
                                <Typography variant="caption" className="hover:text-themed-darker-gray"
                                            fontWeight={500}>
                                    {translations(segment as never) || segment}
                                </Typography>
                            </Link>
                        )
                    })
                }
            </Stack>
        </EnterAnimation>
    )
}