import {BaseWrapper, ContentWrapper} from "@/app/_util/components/wrappers";
import {ListItemText, Typography} from "@mui/material";
import {getTranslations} from "next-intl/server";
import enDict from "@/resources/dicts/en.json";
import {SectionHeading, SectionTitle} from "@/app/_util/components/text-templates";
import {ListItemBase} from "@/app/_util/components/list/list-item-base";
import {ListBase} from "@/app/_util/components/list/list-base";

export default async function TargetAudience() {
    const translations = await getTranslations("about.targetAudience")
    return (
        <section id="target-audience">
            <BaseWrapper withPadding className="
            max-xs:!gap-[12dvw] max-xs:!mt-[10dvw]
            ">
                <ContentWrapper>
                    <SectionTitle number={4} titleTranslationKey="about.targetAudience.enumerationCaption"/>
                    <SectionHeading>{translations("title")}</SectionHeading>
                    <ListBase>
                        {
                            Object.keys(enDict.about.targetAudience.list).map((key, index) => {
                                return (
                                    <ListItemBase key={index}>
                                        <ListItemText>
                                            <Typography letterSpacing={0}
                                                        variant="body2">{translations("list." + key as never)}</Typography>
                                        </ListItemText>
                                    </ListItemBase>
                                )
                            })
                        }
                    </ListBase>
                </ContentWrapper>
            </BaseWrapper>
        </section>
    );
}