import {Stack} from "@mui/material";
import Text from "@/app/[locale]/_erasmus/text";
import Cards from "@/app/[locale]/_erasmus/cards";
import {SectionTitle, TextContainer} from "@/app/[locale]/util-components";

export default async function Erasmus() {
    return (
        <Stack className="w-full pt-[20dvh]">
            <TextContainer classes="h-[70dvh]">
                <SectionTitle number={1} titleTranslationKey="main.about.enumerationCaption" />
                <Text/>
            </TextContainer>
            <Cards/>
        </Stack>
    )
}