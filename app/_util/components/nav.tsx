import links from '@/resources/links.json'
import {getTranslations} from "next-intl/server";
import {Stack, Typography} from "@mui/material";
import Link from "next/link";

export default async function Nav(
    {
        exclude = []
    }: {
        exclude?: string[]
    }
) {
    const translations = await getTranslations("nav");
    return (
        <Stack className="justify-center items-end gap-2" component="nav">
            {Object.entries(links).filter(e => !exclude.includes(e[0])).map((link, index) => (
                <Link key={index} href={link[1]}>
                    <Typography variant="caption"
                                className="text-white hover:font-medium">{translations(link[0] as never)}</Typography>
                </Link>
            ))}
        </Stack>
    )
}