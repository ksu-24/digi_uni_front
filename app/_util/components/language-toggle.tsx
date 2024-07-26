"use client"

import {Stack, Typography} from "@mui/material";
import {Link, usePathname} from "@/app/_localization/navigation";
import {localeNames, locales} from "@/app/_localization/i18n";
import {useLocale} from "next-intl";
import EnterAnimation from "@/app/_util/components/enter-animation";

export default function LanguageToggle(
    {
        color
    }: {
        color?: string
    }
) {
    const currentLocale = useLocale();
    const currentPath = usePathname();
    return (
        <EnterAnimation direction="left" duration={300} delay={800} offset={0}>
            <Stack direction="row" gap="26px" className="pr-[5dvw]">
                {
                    locales.map(locale => {
                        return (
                            <Link key={locale} href={currentPath} locale={locale}>
                                <Typography color={locale === currentLocale ? color ?? "primary" : "#9B9B9B"}
                                            fontWeight={500} className="transition-colors duration-200">
                                    {localeNames[locale]}
                                </Typography>
                            </Link>
                        );
                    })
                }
            </Stack>
        </EnterAnimation>
    );
}