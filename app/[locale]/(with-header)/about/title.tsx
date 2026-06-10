import {Box, Fade, Stack, Typography} from "@mui/material";
import {HeadingWrapper, PageTopWrapper} from "@/app/_util/components/wrappers";
import {getTranslations} from "next-intl/server";
import Breadcrumbs from "@/app/_util/components/breadcrumbs";
import EnterAnimation from "@/app/_util/components/enter-animation";
import {Link} from "@/app/_localization/navigation";
import {MainHeading} from "@/app/_util/components/text-templates";

function NavTop() {
    return (
        <Fade className="hidden md:flex delay-500 gap-4
        max-lg:mr-[1dvw]
        " timeout={400} in={true}>
            <Stack direction="row">
                {
                    Array.from({length: 7}).map((_, idx) => {
                        return (
                            <Box className="py-[1.5dvw] w-full
                            max-lg:py-[2dvw]
                            3xl:py-[1dvw]
                            " key={idx}>
                                <Link href={"#" + idxToSection[idx]}>
                                    <Typography variant="caption" lineHeight={"20px"}
                                                className={"h-5 max-w-full"}
                                                letterSpacing={0}>{`0${idx + 1}`}</Typography>
                                </Link>
                            </Box>
                        )
                    })
                }
            </Stack>
        </Fade>
    );
}

export const idxToSection = [
    "about-project",
    "goal",
    "specific-goals",
    "target-audience",
    "team",
    "partners",
    "timeline"
]

export default async function Title() {
    const translations = await getTranslations("about.title");
    return (
        <Box bgcolor="secondary.main" className="relative">
            <PageTopWrapper bgcolor="secondary.main" className="!gap-0 !pb-0
            xl:pt-[12dvw]
            ">
                <Stack className="justify-between">
                    <HeadingWrapper className="pb-[11dvw]
                    max-xs:!pb-[2dvw]
                    max-lg:pb-[16dvw]
                    xl:pb-[7dvw]
                    2xl:pb-[9dvw]
                    3xl:pb-[6dvw]
                    ">
                        <Breadcrumbs className="!h-fit"/>
                        <Stack className="gap-[3dvw] w-[76%]
                        max-xs:!gap-[8dvw]
                        max-lg:gap-[6dvw] max-lg:w-[90%]
                        3xl:gap-[2dvw] 3xl:w-full
                        ">
                            <EnterAnimation direction="up" offset={20} duration={1000} fadeDuration={400}>
                                <MainHeading>{translations("join")}</MainHeading>
                            </EnterAnimation>
                            <EnterAnimation
                                direction="up" offset={20} delay={200} duration={1000} fadeDuration={400}
                                className="max-w-[60dvw]
                                    max-lg:max-w-[77dvw]
                                    xl:max-w-[59dvw]
                                    2xl:max-w-[51dvw]
                                        ">
                                <Typography variant="h3"
                                            className="!text-[24px] !leading-[1.4]">{translations("biggestProject")}</Typography>
                            </EnterAnimation>
                            <EnterAnimation direction="up" offset={20} delay={400} duration={1000} fadeDuration={400}>
                                <img
                                    src="/images/main/slogan/funded-by-eu.png"
                                    alt="Co-funded by the European Union"
                                    className="h-[3.6dvw] w-auto
                                    max-xs:h-[9.6dvw]
                                    max-md:h-[6dvw]
                                    max-lg:h-[4.8dvw]
                                    xl:h-[3dvw]
                                    3xl:h-[2.4dvw]
                                    "
                                />
                            </EnterAnimation>
                        </Stack>
                    </HeadingWrapper>
                </Stack>
                <NavTop/>
            </PageTopWrapper>
            <Fade in={true} timeout={500}
                  className="delay-[300ms] !w-full z-50 scale-y-0 h-auto hidden md:block">
                <img src="/images/about/pixel-border.svg" alt="pixel-border" style={{
                    animation: "grow-y-full 0.4s ease-out 0.2s forwards",
                }} width="100%"/>
            </Fade>
            <Fade in={true} timeout={500}
                  className="delay-[300ms] !w-full z-50 scale-y-0 h-auto md:hidden">
                <img src="/images/about/pixel-border-md.jpg" alt="pixel-border" style={{
                    animation: "grow-y-full 0.4s ease-out 0.2s forwards",
                }}/>
            </Fade>
            <img src="/images/about/art.svg" alt="art" className="absolute hidden md:block right-0 w-[18dvw] top-[14dvw]
            xl:w-[210px] xl:top-[10.5dvw]
            2xl:top-[12.8dvw] 2xl:w-[15dvw]
            3xl:top-[8.5dvw] 3xl:w-[9dvw]
            "/>
        </Box>
    )
}