import Text from "@/app/[locale]/_about (main)/text";
import Cards from "@/app/[locale]/_about (main)/cards";
import {SectionTitle} from "@/app/_util/components/section-title";
import {DefaultWrapper} from "@/app/_util/components/default-wrapper";
import {ReactNode} from "react";
import {Box, Stack} from "@mui/material";

export default async function Erasmus() {
    return (
        <Box className="pb-[12dvw]
            max-xs:pb-[24dvw]
            2xl:pb-[10dvw]
        ">
            <DefaultWrapper withPadding>
                <ContentWrapper>
                    <SectionTitle number={1} titleTranslationKey="main.about.enumerationCaption"/>
                    <Text/>
                </ContentWrapper>
            </DefaultWrapper>
            <Cards/>
        </Box>
    )
}

export function ContentWrapper(props: { children: ReactNode, className?: string }) {
    return (
        <Stack className={props.className + ` max-w-[84dvw] gap-[5dvw]
        max-xs:gap-[2.5rem]
        max-lg:max-w-[90dvw]
        xl:gap-[4vw] xl:max-w-[80dvw]
        3xl:gap-[3vw] 3xl:max-w-[58dvw]
        `}>
            {props.children}
        </Stack>
    )
}