import {Box, Stack} from "@mui/material";
import LanguageToggle from "@/app/_util/components/language-toggle";
import Nav from "@/app/_util/components/nav";
import DynamicBackwardsNav from "@/app/_util/components/dynamic-backwards-nav";

export default async function Header() {
    return (
        <Stack direction="row" className="justify-between items-center w-full h-[33dvh] p-11" component="header">
            <Stack className="justify-between items-start h-full w-fit">
                <img src="/images/header/digiuni.svg" alt="DigiUni"/>
                <Box className="ml-[11dvw]">
                    <DynamicBackwardsNav/>
                </Box>
            </Stack>
            <Stack direction="row" className="justify-end items-start w-fit h-full gap-4">
                <LanguageToggle/>
                <Nav/>
            </Stack>
        </Stack>
    )
}