import enDict from '@/resources/dicts/en.json';
import {getTranslations} from "next-intl/server";
import {List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {BaseWrapper, ContentWrapper, TextWrapper} from "@/app/_util/components/wrappers";

import {SectionHeading, SectionTitle} from "@/app/_util/components/text-templates";

export default async function ConcreteGoals() {
    const translations = await getTranslations("about.specificGoals");
    return (
        <section id="specific-goals">
            <BaseWrapper withPadding className="max-xs:my-[18dvw] max-xs:!gap-[12dvw]">
                <ContentWrapper>
                    <SectionTitle number={3} titleTranslationKey="about.specificGoals.enumerationCaption"/>
                    <SectionHeading>{translations("title")}</SectionHeading>
                    <List className="flex flex-col !p-0 gap-[1.5dvw]
                    max-xs:!gap-[5dvw]
                    max-lg:gap-[2dvw]
                    3xl:gap-[1dvw]
                    ">
                        {
                            Object.keys(enDict.about.specificGoals.list).map((value, index) => {
                                const text = translations("list." + value as never);
                                return (
                                    <TextWrapper>
                                        <ListItem alignItems="flex-start" disableGutters sx={{
                                            "&.MuiListItem-root > *": {
                                                margin: 0
                                            }
                                        }} key={index} className="!p-0 gap-[2dvw]
                                        max-xs:!gap-[4dvw]
                                        max-lg:gap-[3dvw]
                                        3xl:gap-[1.5dvw]
                                        ">
                                            <ListItemIcon className="w-fit !min-w-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="14"
                                                     viewBox="0 0 17 14" fill="none" className="mt-[5px]">
                                                    <path
                                                        d="M17 5.97561V8.02439H14.8298V9.90244H12.6596V7.85366H0V6.14634H12.6596V4.09756H14.8298V5.97561H17Z"
                                                        fill="#C3C6E3"/>
                                                    <path d="M12.6596 2.04878H10.4894V4.09756H12.6596V2.04878Z"
                                                          fill="#C3C6E3"/>
                                                    <path d="M10.4894 0H8.31915V2.04878H10.4894V0Z" fill="#C3C6E3"/>
                                                    <path d="M12.6596 9.90244H10.4894V11.9512H12.6596V9.90244Z"
                                                          fill="#C3C6E3"/>
                                                    <path d="M10.4894 11.9512H8.31915V14H10.4894V11.9512Z"
                                                          fill="#C3C6E3"/>
                                                </svg>
                                            </ListItemIcon>
                                            <ListItemText>
                                                {!text.includes("(") ?
                                                    <Typography letterSpacing={0}
                                                                variant="body2">{translations("list." + value as never)}
                                                    </Typography> : (
                                                        <Typography variant="body2" letterSpacing={0}>
                                                        {text.split("(")[0]}
                                                            <Typography variant="body2" component="strong" letterSpacing={"-0.02rem"}
                                                                        fontWeight={700}>
                                                                {"(" + text.split("(")[1].split(")")[0] + ")"}
                                                            </Typography>
                                                            {text.split(")")[1]}
                                                        </Typography>
                                                    )
                                                }
                                            </ListItemText>
                                        </ListItem>
                                    </TextWrapper>
                                )
                            })}
                    </List>
                </ContentWrapper>
            </BaseWrapper>
        </section>
    )
}