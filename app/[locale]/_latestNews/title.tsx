import {Stack, Typography} from "@mui/material";
import {getTranslations} from "next-intl/server";
import { Link } from "@/app/_localization/navigation";

export default async function Title() {
    const translations = await getTranslations("main.news");
    return (
        <Stack className="h-fit w-full justify-between" direction="row">
            <Typography variant="h3">{translations("title")}</Typography>
            <Link href={"/news"} passHref>
                <Stack direction="row" className="justify-center items-center gap-4">
                    <Typography variant="body1" className="cursor-pointer">{translations("all")}</Typography>
                    <svg width="25" height="14" viewBox="0 0 25 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_582_1763)">
                            <path
                                d="M25 6.04883V7.95127H23.1818V9.69518H21.3636V7.79274H0V6.20737H21.3636V4.30493H23.1818V6.04883H25Z"
                                fill="black"/>
                            <path d="M21.3631 2.40234H19.5449V4.30478H21.3631V2.40234Z" fill="black"/>
                            <path d="M19.5447 0.5H17.7266V2.40244H19.5447V0.5Z" fill="black"/>
                            <path d="M21.3631 9.69507H19.5449V11.5975H21.3631V9.69507Z" fill="black"/>
                            <path d="M19.5447 11.5977H17.7266V13.5001H19.5447V11.5977Z" fill="black"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_582_1763">
                                <rect width="25" height="13" fill="white" transform="translate(0 0.5)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </Stack>
            </Link>
        </Stack>
    );
}