import Text from "@/app/[locale]/_mission/text";
import Tiles from "@/app/[locale]/_mission/tiles";
import {SectionTitle} from "@/app/_util/components/section-title";
import {Box, Stack} from "@mui/material";
import {BaseWrapper} from "@/app/_util/components/base-wrapper";

export default async function Mission() {
    return (
        <Box bgcolor="info.main">
            <BaseWrapper withPadding className="mr-[5dvw] !my-0
            max-lg:px-[6.5dvw]
            ">
                <Stack className="gap-16
                max-xs:gap-10
                xl:gap-[4dvw]
                2xl:max-w-[75dvw]
                3xl:gap-[3vw]
                ">
                    <SectionTitle number={2} titleTranslationKey="main.mission.enumerationCaption"/>
                    <Text/>
                </Stack>
            </BaseWrapper>
            <Tiles/>
        </Box>
    );
}