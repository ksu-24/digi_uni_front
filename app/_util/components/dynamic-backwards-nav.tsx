"use client"

import {Link, usePathname} from "@/app/_localization/navigation";
import {Stack, Typography} from "@mui/material";
import {useTranslations} from "next-intl";
import EnterAnimation from "@/app/_util/components/enter-animation";

export default function DynamicBackwardsNav(
    {
        className = ""
    }: {
        className?: string
    }
) {
    const segments = ["main"].concat(usePathname().split("/").slice(1, -1));
    const translations = useTranslations("nav");
    return (
        <EnterAnimation direction="up" offset={0} duration={400} delay={800}>
            <Stack direction="row" className={className + ` backwards-nav text-themed-gray h-[30px] items-start
                max-lg:h-[21px]
                `}
            >
                {
                    segments.map((segment, index) => {
                        return (
                            <Link href={"/" + segments.slice(0, index + 1).map(s => {
                                return s === "main" ? "" : s;
                            }).join("/")} key={index} className="h-full flex items-center">
                                <Typography variant="caption" className="hover:text-themed-darker-gray"
                                            lineHeight={1.5} letterSpacing={0}>
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