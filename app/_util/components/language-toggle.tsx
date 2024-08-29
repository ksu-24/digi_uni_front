"use client"

import {Stack, Typography} from "@mui/material";
import {Link, usePathname} from "@/app/_localization/navigation";
import {localeNames, locales} from "@/app/_localization/i18n";
import {useLocale} from "next-intl";
import EnterAnimation from "@/app/_util/components/enter-animation";
import colors from "@/resources/colors.json";

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
            <Stack direction="row" className="gap-[21px] h-8
            max-xs:!gap-[4dvw]
            max-lg:gap-[3dvw]
            ">
                {
                    locales.map(locale => {
                        return (
                            <Link key={locale} href={currentPath} locale={locale} className="h-full flex items-center">
                                <Typography color={locale === currentLocale ? color ?? "primary" : "#62626a"}
                                            variant="body1" fontSize="1rem" lineHeight={1.5} fontWeight={500}
                                            letterSpacing="-0.01rem"
                                            className="transition-colors duration-200">
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