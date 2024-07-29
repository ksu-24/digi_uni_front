import enDict from '@/resources/dicts/en.json';
import {getTranslations} from "next-intl/server";
import {List, ListItemText, Typography} from "@mui/material";
import {BaseWrapper, ContentWrapper} from "@/app/_util/components/wrappers";

import {SectionHeading, SectionTitle} from "@/app/_util/components/text-templates";
import {ListItemBase} from "@/app/_util/components/list/list-item-base";
import {ListBase} from "@/app/_util/components/list/list-base";

export default async function ConcreteGoals() {
    const translations = await getTranslations("about.specificGoals");
    return (
        <section id="specific-goals">
            <BaseWrapper withPadding className="max-xs:my-[18dvw] max-xs:!gap-[12dvw]">
                <ContentWrapper>
                    <SectionTitle number={3} titleTranslationKey="about.specificGoals.enumerationCaption"/>
                    <SectionHeading>{translations("title")}</SectionHeading>
                    <ListBase>
                        {
                            Object.keys(enDict.about.specificGoals.list).map((value, index) => {
                                const text = translations("list." + value as never);
                                return (
                                    <ListItemBase key={index}>
                                        <ListItemText>
                                            {!text.includes("(") ?
                                                <Typography letterSpacing={0}
                                                            variant="body2">{translations("list." + value as never)}
                                                </Typography> : (
                                                    <Typography variant="body2" letterSpacing={0}>
                                                        {text.split("(")[0]}
                                                        <Typography variant="body2" component="strong"
                                                                    letterSpacing={"-0.02rem"}
                                                                    fontWeight={700}>
                                                            {"(" + text.split("(")[1].split(")")[0] + ")"}
                                                        </Typography>
                                                        {text.split(")")[1]}
                                                    </Typography>
                                                )
                                            }
                                        </ListItemText>
                                    </ListItemBase>
                                )
                            })}
                    </ListBase>
                </ContentWrapper>
            </BaseWrapper>
        </section>
    )
}