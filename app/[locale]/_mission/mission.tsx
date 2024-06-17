import {Box, Stack} from "@mui/material";
import Text from "@/app/[locale]/_mission/text";
import Tiles from "@/app/[locale]/_mission/tiles";
import {SectionTitle, TextContainer} from "@/app/[locale]/util-components";

export default async function Mission() {
    return (
        <Stack bgcolor="info.main" className="w-full h-fit pt-[7dvh] mt-[7dvh] sm:mt-0 sm:pt-[14dvh]">
            <Box className="h-[70dvh]">
                <TextContainer>
                    <SectionTitle number={2} titleTranslationKey="main.mission.enumerationCaption"/>
                    <Text/>
                </TextContainer>
            </Box>
            <Tiles/>
        </Stack>
    );
}