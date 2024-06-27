import {Stack} from "@mui/material";
import LanguageToggle from "@/app/_util/components/language-toggle";
import Nav from "@/app/_util/components/nav";

export default async function Header() {
    return (
        <Stack direction="row" className="justify-between items-start w-full min-h-[33dvh] h-fit p-11"
               component="header">
            <img src="/images/header/digiuni.svg" alt="DigiUni"/>
            <Stack direction="row" className="justify-end items-start w-fit h-full gap-2">
                <LanguageToggle/>
                <Nav/>
            </Stack>
        </Stack>
    )
}