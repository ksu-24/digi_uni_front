import {getTranslations} from "next-intl/server";
import {DefaultWrapper} from "@/app/_util/components/default-wrapper";
import {SectionTitle} from "@/app/_util/components/section-title";
import {Typography} from "@mui/material";

export default async function Heading() {
    const translations = await getTranslations("main.partners");
    return (
        <DefaultWrapper disableGap className="max-lg:pb-[8dvw] pt-[12dvw] gap-[4.5dvw]">
            <SectionTitle number={3} titleTranslationKey="main.partners.enumerationCaption"/>
            <Typography variant="h2" fontSize={32}>{translations("title") + ":"}</Typography>
        </DefaultWrapper>
    )
}