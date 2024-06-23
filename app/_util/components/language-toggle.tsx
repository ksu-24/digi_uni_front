"use client"

import {Stack, Typography} from "@mui/material";
import {Link} from "@/app/_localization/navigation";
import {localeNames, locales} from "@/app/_localization/i18n";
import {useLocale} from "next-intl";
import {usePathname} from "@/app/_localization/navigation";

export default function LanguageToggle() {
    const currentLocale = useLocale();
    const currentPath = usePathname();
    return (
        <Stack direction="row" gap="26px" className="pr-[5dvw]">
            {
                locales.map(locale => {
                    return (
                        <Link key={locale} href={currentPath} locale={locale}>
                            <Typography color={locale === currentLocale ? "primary" : "#9B9B9B"} fontWeight={500}>
                                {localeNames[locale]}
                            </Typography>
                        </Link>
                    );
                })
            }
        </Stack>
    );
}