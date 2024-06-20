import {Box, Stack} from "@mui/material";
import Text from "@/app/[locale]/_mission/text";
import Tiles from "@/app/[locale]/_mission/tiles";
import {SectionTitle} from "@/app/[locale]/util-components";
import {DefaultContainer} from "@/app/[locale]/_util/components/default-container";

export default async function Mission() {
    return (
        <Stack bgcolor="info.main" className="w-full h-fit pt-[7dvh] mt-[7dvh] sm:mt-0 sm:pt-[14dvh]">
            <Box className="h-[70dvh]">
                <DefaultContainer>
                    <SectionTitle number={2} titleTranslationKey="main.mission.enumerationCaption"/>
                    <Text/>
                </DefaultContainer>
            </Box>
            <Tiles/>
        </Stack>
    );
}