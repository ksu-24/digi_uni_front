import {Stack} from "@mui/material";
import {Facebook, LinkedIn} from "@mui/icons-material";

export function Social() {
    return (
        <Stack className="gap-6 items-start w-[6%]">
            <Facebook/>
            <LinkedIn/>
        </Stack>
    )
}