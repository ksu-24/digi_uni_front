import {Stack} from "@mui/material";
import Last from "@/app/[locale]/_latestNews/last";
import {getNewsPreview} from "@/app/types/news";
import OtherRecent from "@/app/[locale]/_latestNews/other-recent";

export default async function Body() {
    const latest = await getNewsPreview(4, 0);
    return (
        <Stack className="w-full h-full justify-between gap-[6%] xs:!flex-row
        max-xs:!gap-[12dvw]
        max-lg:mt-[2dvw] max-lg:gap-[6dvw]
        2xl:gap-[10%]
        ">
            <Last news={latest[0]}/>
            <OtherRecent news={JSON.stringify(latest.slice(1))}/>
        </Stack>
    )
}