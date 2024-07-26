import {Box, Drawer, Stack, Typography} from "@mui/material";
import React from "react";
import colors from "@/resources/colors.json";
import Nav from "@/app/_util/components/nav";
import {Social} from "@/app/_util/components/social";

export function Menu(
    {
        open,
        setOpen
    }: {
        open: boolean;
        setOpen: (open: boolean) => void;
    }
) {
    return (
        <>
            <Stack className="w-10 h-10 justify-center gap-[3px] border-[1px] border-themed-gray items-center" onClick={() => setOpen(!open)} component="button">
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
                    className: "w-dvw h-dvh xs:w-[50dvw] bg-[#2f2f35]"
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
                <Stack className="w-full h-full pr-[12dvw] pl-[8dvw] justify-center xs:justify-start items-end pt-[36dvw] xs:pt-[14dvw] xs:px-[8dvw] gap-[6dvw] xs:gap-[3dvw]">
                    <Typography className="text-themed-darker-gray xs:text-themed-gray xs:hidden md:block">
                        Navigation
                    </Typography>
                    <hr className="scale-0 w-full border-[1px] border-themed-darker-gray xs:border-themed-gray mb-[3dvw] animate-grow-right origin-right xs:hidden md:block" style={{
                        animationDelay: "100ms"
                    }}/>
                    <Nav className="text-white xs:!text-[1.3rem] !text-[1.8rem]" fontWeight={400} containerClassName="gap-[6dvw] xs:gap-[3dvw]" showCurrent={false}/>
                    <Social direction="row" color="white"/>
                </Stack>
            </Drawer>
        </>
    );
}