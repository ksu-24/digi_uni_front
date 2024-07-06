import {Stack} from "@mui/material";
import Last from "@/app/[locale]/_latestNews/last";
import {getNewsPreview} from "@/app/model/news";
import OtherRecent from "@/app/[locale]/_latestNews/other-recent";
import useWindow from "@/app/_util/use-window";

const newsAmount = [
    {
        min: 1,
        amount: 0
    },
    {
        min: 768,
        amount: 2
    },
    {
        min: 1500,
        amount: 3
    },
    {
        min: 2560,
        amount: 4
    },
    {
        min: 3840,
        amount: 5
    }
].reverse();

export function useNewsAmount() {
    const windowWidth = useWindow().innerWidth;
    return newsAmount.find(({min}) => windowWidth >= min)?.amount ?? 0;
}

export default async function Body() {
    const latest = await getNewsPreview(newsAmount.reduce((prev, curr) => Math.max(prev, curr.amount), 0) + 1, 0);
    return (
        <Stack className="w-full h-full justify-between gap-[8dvw] pb-[8dvh]" direction="row">
            <Last news={latest[0]}/>
            <OtherRecent news={JSON.stringify(latest.slice(1))}/>
        </Stack>
    )
}