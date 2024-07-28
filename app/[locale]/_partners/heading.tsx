import {getTranslations} from "next-intl/server";
import {BaseWrapper} from "@/app/_util/components/base-wrapper";
import {SectionTitle} from "@/app/_util/components/section-title";
import {Typography} from "@mui/material";
import screens from "@/resources/screens.json";

export function SectionHeading(props: { children: React.ReactNode }) {
    return <Typography variant="h2" lineHeight={1.3} sx={{
        "&": {
            fontSize: "38px",
        },
        [`@media (max-width: ${screens.lg})`]: {
            "&": {
                fontSize: "34px"
            }
        },
        [`@media (max-width: ${screens.md})`]: {
            "&": {
                fontSize: "32px"
            }
        },
        [`@media (max-width: ${screens.xs})`]: {
            "&": {
                fontSize: "30px"
            }
        }
    }}>
        {props.children}
    </Typography>;
}

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