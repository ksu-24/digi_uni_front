import enDict from '@/resources/dicts/en.json';
import {getTranslations} from "next-intl/server";
import {List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {BaseWrapper} from "@/app/_util/components/wrappers";
import listIcon from "@/public/images/about/list-icon-arrow.svg";
import Image from "next/image";

import {SectionTitle} from "@/app/_util/components/text-templates";

export default async function ConcreteGoals() {
    const translations = await getTranslations("about.specificGoals");
    return (
        <section id="specific-goals">
            <BaseWrapper className={`mb-[20dvh]`} withPadding>
                <SectionTitle number={3} titleTranslationKey="about.specificGoals.enumerationCaption"/>
                <Typography variant="h2">{translations("title")}</Typography>
                <List className="flex flex-col gap-4">
                    {
                        Object.keys(enDict.about.specificGoals.list).map((value, index) => {
                            const text = translations("list." + value as never);
                            return (
                                <ListItem alignItems="flex-start" disableGutters sx={{
                                    "&.MuiListItem-root > *": {
                                        margin: 0
                                    }
                                }} key={index} className="lg:gap-8 gap-[4dvw]">
                                    <ListItemIcon className="w-4 !min-w-0">
                                        <Image src={listIcon} alt={`${index + 1}.`} width={"1rem" as never}
                                               height={"1rem" as never}
                                               className="mt-1"/>
                                    </ListItemIcon>
                                    <ListItemText>
                                        {!text.includes("(") ?
                                            <Typography
                                                variant="body2">{translations("list." + value as never)}
                                            </Typography> : (
                                                <Typography variant="body2">
                                                    {text.split("(")[0]}
                                                    <Typography variant="body2" component="strong"
                                                                fontWeight={700}>{"(" + text.split("(")[1].split(")")[0] + ")"}
                                                    </Typography>
                                                    {text.split(")")[1]}
                                                </Typography>
                                            )
                                        }
                                    </ListItemText>
                                </ListItem>
                            )
                        })}
                </List>
            </BaseWrapper>
        </section>
    )
}