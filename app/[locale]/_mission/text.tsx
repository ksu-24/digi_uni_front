import {Stack, Typography} from "@mui/material";
import {getTranslations} from "next-intl/server";

export default async function Text() {
    const translations = await getTranslations("main.mission");
    return (
        <Stack direction="row" className="gap-[2%] sm:pr-[10%]">
            <Typography variant="h3" className="w-fit h-fit" bgcolor="white">
                {translations("goal") + ":"}
            </Typography>
            <Typography variant="h3">
                {translations("content")}
            </Typography>
        </Stack>
    )
}