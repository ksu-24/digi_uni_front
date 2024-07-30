import {Stack} from "@mui/material";
import Main from "@/app/[locale]/_slogan/main";
import ellipse from "@/public/images/main/slogan/ellipse.png";
import {DigiLogoHuge} from "@/app/[locale]/_slogan/digiLogoHuge";
import Header from "@/app/[locale]/(with-header)/header";
import screens from "@/resources/screens.json"

export default async function Slogan() {
    return (
        <Stack className="w-full items-center relative
        gap-[7dvw] overflow-hidden
        xl:p-[4dvw] xl:gap-[5dvw]
        2xl:gap-[6dvw] 2xl:py-[3dvw]
        3xl:p-[3dvw] 3xl:pb-0 3xl:h-[85svh] 3xl:gap-[4dvw]
        " direction="row" bgcolor="secondary.main" sx={{
            padding: "4.5dvw",
            height: "100svh",
            [`@media (max-width: ${screens.lg})`]: {
                paddingLeft: "8dvw",
                paddingRight: "8dvw",
                paddingTop: "12dvw",
                paddingBottom: "0",
                height: "74svh"
            },
            [`@media (max-width: ${screens.md})`]: {
                paddingLeft: "6dvw",
                paddingTop: "14dvw",
                paddingBottom: "12dvw",
                height: "auto"
            },
            [`@media (max-width: ${screens.xs})`]: {
                height: "100svh",
                paddingTop: 0,
                paddingBottom: 0
            },
        }}>
            <DigiLogoHuge/>
            <Header className="absolute top-0 left-0" logoClassname="visible lg:invisible w-[19dvw] max-lg:w-[24dvw]"/>
            <Main/>
            <img src={ellipse.src} alt="Ellipse" className="absolute pointer-events-none -right-[44dvw]
            3xl:-right-[33.6dvw]
            "/>
        </Stack>
    );
}

