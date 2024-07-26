import {Stack} from "@mui/material";
import Last from "@/app/[locale]/_latestNews/last";
import {getNewsPreview} from "@/app/model/news";
import OtherRecent from "@/app/[locale]/_latestNews/other-recent";

export default async function Body() {
    const latest = await getNewsPreview(4, 0);
    return (
        <Stack className="w-full h-full justify-between gap-[8dvw] pb-[8dvh] xs:!flex-row">
            <Last news={latest[0]}/>
            <OtherRecent news={JSON.stringify(latest.slice(1))}/>
        </Stack>
    )
}