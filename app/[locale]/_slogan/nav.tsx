import {getTranslations} from "next-intl/server";
import {Stack, Typography} from "@mui/material";
import links from "@/resources/links.json";
import Link from "next/link";

export default async function Nav() {
    const translations = await getTranslations("links")

    return (
        <Stack className="h-1/4 w-full justify-end" direction="row" gap="32px">
            {
                Object.entries(links).map(([key, value]) => {
                    return (
                        <Link key={key} href={value}>
                            <Typography variant="body1" fontWeight={500} sx={{
                                ...(key === "Main" ? {
                                    textDecoration: "underline",
                                    textUnderlineOffset: 8,
                                    textDecorationThickness: 1
                                } : {})
                            }}>
                                {translations(key.split(".", 1).pop() as never)}
                            </Typography>
                        </Link>
                    )
                })
            }
        </Stack>
    )
}