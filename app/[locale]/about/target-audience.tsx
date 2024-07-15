import {DefaultContainer} from "@/app/_util/components/default-container";
import {SectionTitle} from "@/app/_util/components/section-title";
import {List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {getTranslations} from "next-intl/server";
import enDict from "@/resources/dicts/en.json";
import listIcon from "@/public/images/about/list-icon-arrow.svg";
import Image from "next/image";

export default async function TargetAudience() {
    const translations = await getTranslations("about.targetAudience")
    return (
        <section id="target-audience">
            <DefaultContainer className="pt-[20dvh]">
                <SectionTitle number={4} titleTranslationKey="about.targetAudience.enumerationCaption"/>
                <Typography variant="h3">{translations("title")}</Typography>
                <List>
                    {
                        Object.keys(enDict.about.targetAudience.list).map((key, index) => {
                            return (
                                <ListItem alignItems="flex-start" key={index} disableGutters sx={{
                                    "&.MuiListItem-root > *": {
                                        margin: 0
                                    }
                                }}>
                                    <ListItemIcon className="w-12 !min-w-0">
                                        <Image  src={listIcon} alt="list icon" width={"1rem" as never}
                                                height={"1rem" as never} className="mt-1"/>
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography variant="body2">{translations("list." + key as never)}</Typography>
                                    </ListItemText>
                                </ListItem>
                            )
                        })
                    }
                </List>
            </DefaultContainer>
        </section>
    );
}