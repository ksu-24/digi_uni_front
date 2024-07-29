import {Box, Stack, Typography} from "@mui/material";
import {getTranslations} from "next-intl/server";
import {Link} from "@/app/_localization/navigation";

import {SectionHeading} from "@/app/_util/components/text-templates";

export default async function Title() {
    const translations = await getTranslations("main.news");
    return (
        <Stack className="w-full justify-between items-center" direction="row">
            <SectionHeading>{translations("title")}:</SectionHeading>
            <Link href={"/news"} passHref>
                <Stack direction="row" className="gap-[1.5dvw]
                3xl:gap-[1vw]
                ">
                    <Typography variant="body1" fontSize={16}
                                className="cursor-pointer h-fit max-md:hidden">{translations("all")}</Typography>
                    <Box className="mt-1 w-9 h-5
                     max-lg:mt-0.5 max-lg:w-8
                     2xl:mt-[5px]
                     text-[#2f2f35]
                     " sx={{
                        "&::before, &::after": {
                            content: "''",
                        },
                    }}>
                        <svg width="auto" height="13.41" viewBox="0 0 220 82" fill="currentColor"
                             xmlns="http://www.w3.org/2000/svg" className="translate-y-0.5
                             max-md:!translate-y-0
                             max-lg:translate-y-[3px]
                             ">
                            <path d="M220 35V47H208V58H196V46H0V36H196V24H208V35H220Z" fill="currentColor"></path>
                            <path d="M196 12H184V24H196V12Z" fill="currentColor"></path>
                            <path d="M184 0H172V12H184V0Z" fill="currentColor"></path>
                            <path d="M196 58H184V70H196V58Z" fill="currentColor"></path>
                            <path d="M184 70H172V82H184V70Z" fill="currentColor"></path>
                        </svg>
                    </Box>
                </Stack>
            </Link>
        </Stack>
    );
}