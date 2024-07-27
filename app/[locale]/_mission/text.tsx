import {Stack, Typography} from "@mui/material";
import {getTranslations} from "next-intl/server";
import screens from "@/resources/screens.json";

export default async function Text() {
    const translations = await getTranslations("main.mission");
    return (
        <Stack direction="column" className="gap-8
        lg:flex-row
        2xl:max-w-[1243px]
        ">
            <Typography variant="h3" className="w-fit h-fit px-0.5
            max-md:!text-[24px]
            max-lg:text-[28px]
            " bgcolor="white">
                {translations("goal") + ":"}
            </Typography>
            <Typography variant="h3" letterSpacing="-0.16px" lineHeight={1.4} className="
            2xl:text-[36px]
            " sx={{
                "&": {
                    fontSize: "2rem",
                },
                [`@media (max-width: ${screens.lg})`]: {
                    "&": {
                        fontSize: "28px"
                    }
                },
                [`@media (max-width: ${screens.md})`]: {
                    "&": {
                        fontSize: "24px"
                    }
                },
                [`@media (max-width: ${screens.xs})`]: {
                    "&": {
                        fontSize: "1.6rem"
                    }
                }
            }}>
                {translations("content")}
            </Typography>
        </Stack>
    )
}