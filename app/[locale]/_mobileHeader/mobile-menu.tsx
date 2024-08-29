import {Box, Drawer, Fade, Stack, Typography} from "@mui/material";
import React from "react";
import colors from "@/resources/colors.json";
import {Social} from "@/app/_util/components/social";
import links from "@/resources/links.json";
import {Link} from "@/app/_localization/navigation";
import {useTranslations} from "next-intl";

export function Menu(
    {
        open,
        setOpen
    }: {
        open: boolean;
        setOpen: (open: boolean) => void;
    }
) {
    const translations = useTranslations("nav");
    return (
        <>
            <Stack className="w-10 h-10 justify-center gap-[3px] border-[1px] border-themed-gray items-center"
                   onClick={() => setOpen(!open)} component="button">
                <Box className="w-5 h-0.5 transition-all" style={{
                    transform: open ? "rotate(-45deg) translateY(6px)" : "none",
                    backgroundColor: open ? "white" : colors.gray.darkest,
                    transformOrigin: "10px 7px",
                    transition: "transform 0.4s cubic-bezier, background-color 0.1s cubic-bezier"
                }}/>
                <Box className="w-5 h-0.5 bg-themed-darkgray" style={{
                    visibility: open ? "hidden" : "visible"
                }}/>
                <Box className="w-5 h-0.5 transition-all" style={{
                    transform: open ? "rotate(45deg) translateY(-4px)" : "none",
                    backgroundColor: open ? "white" : colors.gray.darkest,
                    transformOrigin: "10px -3px",
                    transition: "transform 0.4s, background-color 0.1s"
                }}/>
            </Stack>
            <Drawer
                anchor="right"
                open={open}
                PaperProps={{
                    className: "w-dvw h-dvh md:w-[50dvw] bg-[#2f2f35]"
                }}
                SlideProps={{
                    easing: {
                        enter: "cubic-bezier(.27,-0.02,0,1.02)",
                        exit: "none"
                    }
                }}
                slotProps={{
                    backdrop: {
                        className: "bg-transparent"
                    }
                }}
                transitionDuration={450}
            >
                <Stack
                    className="w-full h-full pr-[12dvw] pl-[8dvw] justify-center xs:justify-start items-end pt-[36dvw] gap-[6dvw]
                    max-xs:pt-0
                    xs:pt-[14dvw] xs:px-[8dvw] xs:gap-[3dvw]">
                    <Typography className="text-themed-darker-gray text-[20px]
                    xs:hidden xs:text-themed-gray xs:text-[15dvw]
                    md:block md:text-[18px]
                    " lineHeight={1.1} letterSpacing={0}
                    >
                        {translations("navigation")}
                    </Typography>
                    <hr className="scale-0 w-[70dvw] border-[1px] border-themed-darker-gray xs:border-themed-gray mb-[3dvw] animate-grow-right origin-right xs:hidden md:block"
                        style={{
                            animationDelay: "100ms"
                        }}/>
                    <Box component="nav">
                        <Stack component="ul" className={`justify-between items-end flex-nowrap 
                                max-xs:!gap-[6dvw]
                                max-lg:gap-[3dvw]`}>
                            {Object.entries(links).map((link, index) => (
                                <Fade in={true} key={index}>
                                    <Link href={link[1]} className="h-full flex items-center"
                                          onClick={() => setOpen(false)}>
                                        <Typography
                                            variant="h6"
                                            letterSpacing={0}
                                            fontSize={"1.6rem"}
                                            color="white"
                                            lineHeight={1.1}
                                            fontWeight={400}
                                            className="
                                                max-xs:!text-[1.8rem]
                                                max-md:text-[1.3rem]
                                                "
                                        >
                                            {translations(link[0] as never)}
                                        </Typography>
                                    </Link>
                                </Fade>
                            ))}
                        </Stack>
                    </Box>
                    <Social direction="row" color="white" className="mt-[6dvw] xs:hidden
                    max-xs:!gap-[8dvw]
                    max-lg:gap-[5dvw]
                    " imageClassname="
                    max-xs:!w-[7dvw]
                    max-lg:w-[3dvw]
                    "/>
                </Stack>
            </Drawer>
        </>
    );
}