import {Stack} from "@mui/material";
import Last from "@/app/[locale]/_latestNews/last";
import {getNews} from "@/app/[locale]/_util/news";
import OtherRecent from "@/app/[locale]/_latestNews/other-recent";

export default async function Body() {
    const latest = await getNews();
    return (
        <Stack className="w-full h-full justify-between gap-[8dvw] pb-[8dvh]" direction="row">
            <Last news={latest[0]}/>
            <OtherRecent news={JSON.stringify(latest.slice(1))}/>
        </Stack>
    )
}