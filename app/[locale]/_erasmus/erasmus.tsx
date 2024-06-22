import {Stack} from "@mui/material";
import Text from "@/app/[locale]/_erasmus/text";
import Cards from "@/app/[locale]/_erasmus/cards";
import {SectionTitle} from "@/app/[locale]/_util/components/section-title";
import {DefaultContainer} from "@/app/[locale]/_util/components/default-container";

export default async function Erasmus() {
    return (
        <Stack className="w-full pt-[20dvh]">
            <DefaultContainer classes="h-[70dvh]">
                <SectionTitle number={1} titleTranslationKey="main.about.enumerationCaption" />
                <Text/>
            </DefaultContainer>
            <Cards/>
        </Stack>
    )
}