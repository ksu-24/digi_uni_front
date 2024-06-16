import {Stack} from "@mui/material";
import Nav from "@/app/[locale]/_slogan/nav";
import LanguageToggle from "@/app/[locale]/_util/components/language-toggle";

export default async function Header() {
    return <Stack direction="row" gap={8} className="justife-end pr-[55px]">
        <Nav/>
        <LanguageToggle currentPath={"/"}/>
    </Stack>;
}