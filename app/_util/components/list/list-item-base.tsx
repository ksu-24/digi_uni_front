import {ListItem} from "@mui/material";
import {TextWrapper} from "@/app/_util/components/wrappers";
import {ArrowBullet} from "@/app/_util/components/list/arrow-bullet";

export function ListItemBase({children, className = ""}: { children?: React.ReactNode, className?: string }) {
    return (
        <TextWrapper>
            <ListItem alignItems="flex-start" disableGutters sx={{
                "&.MuiListItem-root > *": {
                    margin: 0
                }
            }} className={className + ` 
                !p-0 gap-[2dvw]
                max-xs:!gap-[4dvw]
                max-lg:gap-[3dvw]
                3xl:gap-[1.5dvw]
                `}>
                <ArrowBullet/>
                {children}
            </ListItem>
        </TextWrapper>
    );
}