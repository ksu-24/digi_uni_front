import Text from "@/app/[locale]/_about (main)/text";
import Cards from "@/app/[locale]/_about (main)/cards";
import {SectionTitle} from "@/app/_util/components/section-title";
import {BaseWrapper} from "@/app/_util/components/base-wrapper";
import {ReactNode} from "react";
import {Box, Stack} from "@mui/material";

export default async function Erasmus() {
    return (
        <Box className="pb-[12dvw]
            max-xs:pb-[24dvw]
            2xl:pb-[10dvw]
        ">
            <BaseWrapper withPadding className="max-xs:!mt-[12dvw] max-xs:!mb-[18dvw]">
                <ContentWrapper>
                    <SectionTitle number={1} titleTranslationKey="main.about.enumerationCaption"/>
                    <Text/>
                </ContentWrapper>
            </BaseWrapper>
            <Cards/>
        </Box>
    )
}

export function ContentWrapper(props: { children: ReactNode, className?: string }) {
    return (
        <Stack className={props.className + ` gap-[5dvw]
        max-xs:!gap-[2.5rem]
        xl:gap-[4dvw]
        3xl:gap-[d3vw]
        `}>
            {props.children}
        </Stack>
    )
}