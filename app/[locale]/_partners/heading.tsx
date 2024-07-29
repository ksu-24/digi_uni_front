import {getTranslations} from "next-intl/server";
import {BaseWrapper} from "@/app/_util/components/wrappers";
import {SectionHeading, SectionTitle} from "@/app/_util/components/text-templates";

export default async function Heading() {
    const translations = await getTranslations("main.partners");
    return (
        <BaseWrapper className="pt-[12dvw] pb-[6dvw] gap-[5dvw]
            max-xs:!gap-[2.5rem] max-xs:!pb-[12dvw] max-xs:!pt-[20dvw] max-xs:!my-0
            max-lg:gap-[4.5dvw] max-lg:pb-[8dvw]
            xl:pb-[7dvw] xl:gap-[4dvw]
            2xl:pt-[10dvw] 2xl:pb-[6dvw]
            3xl:pt-[7dvw] 3xl:pb-[4dvw] 3xl:gap-[3dvw]
            " disableGap>
            <SectionTitle number={3} titleTranslationKey="main.partners.enumerationCaption"/>
            <SectionHeading>
                {translations("title")}:
            </SectionHeading>
        </BaseWrapper>
    )
}