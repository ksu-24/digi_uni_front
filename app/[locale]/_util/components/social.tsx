import {Stack} from "@mui/material";
import {Facebook, LinkedIn} from "@mui/icons-material";
import {iconProps} from "@/app/[locale]/theme-obj";

export function Social(
    {
        direction = "column"
    } : {
        direction?: "row" | "column"
    }
) {
    return (
        <Stack className="gap-6 items-start w-[6%]" direction={direction}>
            <Facebook {...iconProps}/>
            <LinkedIn {...iconProps}/>
        </Stack>
    )
}