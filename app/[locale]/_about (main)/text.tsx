import {getTranslations} from "next-intl/server";
import {Stack, Typography} from "@mui/material";

export default async function Text() {
    const translations = await getTranslations("main.about");
    return (
        <>
            <Typography variant="h3" className="w-3/5">{translations("title")}</Typography>
            <Typography variant="body2" className="whitespace-pre-wrap">{translations("content")}</Typography>
        </>
    );
}