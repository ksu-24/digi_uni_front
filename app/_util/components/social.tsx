import {Stack} from "@mui/material";
import {Link} from "@/app/_localization/navigation";
import facebook from '@/public/images/commons/facebook.svg'
import linkedin from '@/public/images/commons/linkedin.svg'
import Image from "next/image";

export function Social(
    {
        direction = "column",
        color = "black",
        className = ""
    }: {
        direction?: "row" | "column",
        color?: string,
        className?: string
    }
) {
    return (
        <Stack className={className + " gap-[2dvw] items-start"} direction={direction} sx={{
            "& *": {
                color
            }
        }}>
            <Link href="https://www.facebook.com/khersonstateuniversity">
                <Image src={facebook} alt="facebook" width={21} height={21}/>
            </Link>
            <Link href="https://www.linkedin.com/school/kherson-state-university">
                <Image src={linkedin} alt="linkedin" width={21} height={21}/>
            </Link>
        </Stack>
    )
}