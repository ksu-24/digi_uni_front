import Text from "@/app/[locale]/_about (main)/text";
import Cards from "@/app/[locale]/_about (main)/cards";
import {BaseWrapper, ContentWrapper} from "@/app/_util/components/wrappers";
import {Box} from "@mui/material";
import {SectionTitle} from "@/app/_util/components/text-templates";

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

