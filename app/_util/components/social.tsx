import {Stack} from "@mui/material";
import {Facebook, LinkedIn} from "@mui/icons-material";
import {iconProps} from "@/app/_theme/theme-obj";
import {Link} from "@/app/_localization/navigation";

export function Social(
    {
        direction = "column",
        color = "black"
    }: {
        direction?: "row" | "column",
        color?: string
    }
) {
    return (
        <Stack className="gap-6 items-start" direction={direction} style={{
            width: direction === "row" ? "4.5rem" : "6%",
            height: direction === "column" ? "4.5rem" : "auto"
        }} sx={{
            "& *": {
                color
            }
        }}>
            <Link href="https://www.facebook.com/khersonstateuniversity">
                <Facebook {...iconProps}/>
            </Link>
            <Link href="https://www.linkedin.com/school/kherson-state-university">
                <LinkedIn {...iconProps}/>
            </Link>
        </Stack>
    )
}