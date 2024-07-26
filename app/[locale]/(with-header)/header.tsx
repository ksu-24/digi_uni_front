import {Stack} from "@mui/material";
import LanguageToggle from "@/app/_util/components/language-toggle";
import Nav from "@/app/_util/components/nav";
import {Logo} from "@/app/[locale]/(with-header)/logo";
import EnterAnimation from "@/app/_util/components/enter-animation";

export default async function Header(
    {
        className = '',
        disableImage = false
    }: {
        className?: string,
        disableImage?: boolean
    }
) {
    return (
        <Stack direction="row"
               className={"!hidden lg:!flex justify-between items-start w-full h-fit md:p-11 p-5 " + className}
               component="header">
            {!disableImage && <Logo/>}
            <Stack direction="row" className="justify-end items-start w-fit h-full gap-2">
                <LanguageToggle/>
                <Nav/>
            </Stack>
        </Stack>
    )
}