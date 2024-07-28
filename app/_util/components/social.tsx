import {Stack} from "@mui/material";
import {Link} from "@/app/_localization/navigation";
import facebook from '@/public/images/commons/facebook.svg'
import linkedin from '@/public/images/commons/linkedin.svg'
import Image from "next/image";

export function Social(
    {
        direction = "column",
        color = "black",
        className = "",
        size = 21
    }: {
        direction?: "row" | "column",
        color?: string,
        className?: string,
        size?: number
    }
) {
    return (
        <Stack className={className + " gap-[2dvw] items-start"} direction={direction} sx={{
            "& *": {
                color
            }
        }}>
            <Link href="https://www.facebook.com/khersonstateuniversity">
                <Image src={facebook} alt="facebook" width={size} height={size} className="
                max-xs:!w-[30px] max-xs:!h-[30px]
                "/>
            </Link>
            <Link href="https://www.linkedin.com/school/kherson-state-university">
                <Image src={linkedin} alt="linkedin" width={size} height={size} className="
                max-xs:!w-[30px] max-xs:!h-[30px]
                "/>
            </Link>
        </Stack>
    )
}