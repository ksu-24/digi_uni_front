import {Stack} from "@mui/material";
import LanguageToggle from "@/app/_util/components/language-toggle";
import Nav from "@/app/_util/components/nav";
import {Logo} from "@/app/[locale]/(with-header)/logo";

export default async function Header(
    {
        className = ''
    } : {
        className?: string
    }
) {
    return (
        <Stack direction="row" className={"justify-between items-start w-full min-h-[33dvh] h-fit md:p-11 " + className}
               component="header">
            <Logo/>
            <Stack direction="row" className="justify-end items-start w-fit h-full gap-2">
                <LanguageToggle/>
                <Nav/>
            </Stack>
        </Stack>
    )
}