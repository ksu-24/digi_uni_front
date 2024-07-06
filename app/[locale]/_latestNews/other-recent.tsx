"use client"

import News from '@/app/model/news';
import {Stack, Typography} from "@mui/material";
import Timestamp from "@/app/_util/components/timestamp";
import useWindow from "@/app/_util/use-window";
import { Link } from "@/app/_localization/navigation";
import {useNewsAmount} from "@/app/[locale]/_latestNews/body";

export default function OtherRecent(
    {
        news
    }: {
        news: string
    }
) {
    const newsArr = JSON.parse(news) as News[];
    const newsAmount = useNewsAmount();
    return (
        <Stack className="w-2/3 h-full" direction="column">
            {newsArr.slice(0, newsAmount).map((news, index) => (
                <NewsVisualization key={index} news={news}/>
            ))}
        </Stack>
    )
}

function NewsVisualization(
    {
        news
    }: {
        news: News
    }) {
    return (
        <Stack className="w-full h-full border-t-[1px] border-[#AAAAAD] gap-5 pt-5 hover:scale-105" direction="column">
            <Link href={`/news/${news.id}`} className="w-full h-full">
                <Timestamp date={news.date}/>
                <Typography variant="h5">{news.title}</Typography>
            </Link>
        </Stack>
    )
}