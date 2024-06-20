import {getTranslations} from "next-intl/server";
import {DefaultContainer} from "@/app/[locale]/_util/components/default-container";
import {SectionTitle} from "@/app/[locale]/util-components";
import {Typography} from "@mui/material";

export default async function Heading() {
    const translations = await getTranslations("main.partners");
    return (
        <DefaultContainer>
            <SectionTitle number={3} titleTranslationKey="main.partners.enumerationCaption"/>
            <Typography variant="h3">{translations("title")}</Typography>
        </DefaultContainer>
    )
}