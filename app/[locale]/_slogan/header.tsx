import {Stack} from "@mui/material";
import Nav from "@/app/[locale]/_slogan/nav";
import LanguageToggle from "@/app/_util/components/language-toggle";

export default async function Header() {
    return <Stack direction="row" gap={8} className="justife-end pr-[55px] z-10">
        <Nav/>
        <LanguageToggle/>
    </Stack>;
}