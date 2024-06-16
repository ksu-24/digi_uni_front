import {Stack, Typography} from "@mui/material";
import {Link} from "@/app/_localization/navigation";
import {locales, localeNames} from "@/app/_localization/i18n";
import {getLocale} from "next-intl/server";

export default async function LanguageToggle({currentPath}: { currentPath: string }) {
    const currentLocale = await getLocale();
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