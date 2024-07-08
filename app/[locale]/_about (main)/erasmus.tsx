import {Stack} from "@mui/material";
import Text from "@/app/[locale]/_about (main)/text";
import Cards from "@/app/[locale]/_about (main)/cards";
import {SectionTitle} from "@/app/_util/components/section-title";
import {DefaultContainer} from "@/app/_util/components/default-container";

export default async function Erasmus() {
    return (
        <Stack className="w-full pt-[20dvh]">
            <DefaultContainer className="min-h-[70dvh]">
                <SectionTitle number={1} titleTranslationKey="main.about.enumerationCaption"/>
                <Text/>
            </DefaultContainer>
            <Cards/>
        </Stack>
    )
}