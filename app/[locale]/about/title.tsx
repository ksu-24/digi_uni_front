import {Box, Stack, Typography} from "@mui/material";
import Header from "@/app/[locale]/(with-header)/header";
import {DefaultContainer, defaultPx} from "@/app/_util/components/default-container";
import {getTranslations} from "next-intl/server";

function NavTop() {
    return (
        <Stack direction="row" style={{
            paddingLeft: `calc(${defaultPx} - 2.75rem)`
        }} className="pb-4">
            {
                Array.from({length: 7}).map((_, idx) => {
                    return (
                        <Box className="w-[11vw]" key={idx}>
                            <Typography>{`0${idx + 1}`}</Typography>
                        </Box>
                    )
                })
            }
        </Stack>
    );
}

export default async function Title() {
    const translations = await getTranslations("about.title");
    return (
        <Stack className="bg-secondary h-dvh p-11 !pb-0 border-b-[1px] border-themed-darker-gray justify-between">
            <Stack className="w-full bg-right bg-contain bg-no-repeat " style={{
                backgroundImage: `url(/images/about/about-tiles.svg)`,
                height: "calc(100dvh - 2 * 2.75rem)"
            }}>
                <Header className="!p-0"/>
                <DefaultContainer className="-ml-4 md:-ml-11 min-h-full pr-0 md:px-[11%]">
                    <Typography variant="h1" className="w-full md:w-2/3 3xl:w-1/2">{translations("slogan")}</Typography>
                </DefaultContainer>
            </Stack>
            <NavTop/>
        </Stack>
    )
}