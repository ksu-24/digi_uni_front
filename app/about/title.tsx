import {Box, Fade, Stack, Typography} from "@mui/material";
import Header from "@/app/[locale]/(with-header)/header";
import {BaseWrapper, defaultPx} from "@/app/_util/components/base-wrapper";
import {getTranslations} from "next-intl/server";
import DynamicBackwardsNav from "@/app/_util/components/dynamic-backwards-nav";
import screens from "@/resources/screens.json";
import EnterAnimation from "@/app/_util/components/enter-animation";
import {Link} from "@/app/_localization/navigation";

function NavTop() {
    return (
        <Fade className="pb-4 hidden md:flex delay-[400ms] justify-self-end" timeout={400} in={true}>
            <Stack direction="row" style={{
                paddingLeft: `calc(${defaultPx} - 2.75rem)`
            }}>
                {
                    Array.from({length: 7}).map((_, idx) => {
                        return (
                            <Box className="w-[11vw]" key={idx}>
                                <Link href={"#" + idxToSection[idx]}>
                                    <Typography>{`0${idx + 1}`}</Typography>
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
        <Stack
            className="bg-secondary px-[5dvw] lg:h-dvh 4xl:h-auto pt-[24dvh] !pb-[calc(10dvw + 1.75rem)] xs:p-11 xs:!pb-0 justify-between relative">
            <Stack
                className="h-full w-full bg-contain bg-no-repeat break-words sm:break-keep justify-stretch gap-4"
                style={{
                    backgroundImage: `url(/images/about/about-tiles.svg)`,
                    [`@media (min-width: ${screens.lg})`]: {
                        minHeight: "calc(100dvh - 2 * 2.75rem)"
                    },
                    backgroundPosition: "right center"
                }}>
                <Header className="!p-0"/>
                <BaseWrapper className="lg:-ml-11 lg:!px-[11%]">
                    <DynamicBackwardsNav/>
                </BaseWrapper>
                <BaseWrapper
                    className="lg:-ml-11 mt-[10dvh] mb-[18dvh] lg:mt-0 lg:!mb-[6dvh] pr-0 !p-0 3xl:!py-[5dvh] lg:!px-[11%] justify-start h-full">
                    <EnterAnimation direction="up" offset={20} duration={500} className="w-full lg:w-4/5 4xl:w-2/3">
                        <Typography variant="h1"
                                    className="w-full">{translations("join")}</Typography>
                    </EnterAnimation>
                    <EnterAnimation direction="up" offset={20} delay={200} duration={500} fadeDuration={400}
                                    className="w-full lg:w-4/5 4xl:w-2/3">
                        <Typography variant="h3"
                                    className="w-full">{translations("biggestProject")}</Typography>
                    </EnterAnimation>
                </BaseWrapper>
            </Stack>
            <Stack>
                <NavTop/>
                <Fade in={true} timeout={400}
                      className="delay-200 !w-dvw !max-w-[100dvw] !min-w-[100dvw] !h-9 ml-[-2.75rem] z-50 scale-y-0">
                    <Box style={{
                        backgroundImage: `url("/images/about/pixel-border.svg")`,
                        backgroundRepeat: "repeat",
                        animation: "grow-y-full 0.4s ease-out 0.2s forwards",
                        top: "calc(100% - 0.875rem)"
                    }}/>
                </Fade>
            </Stack>
        </Stack>
    )
}