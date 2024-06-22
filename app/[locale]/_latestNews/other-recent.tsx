"use client"

import News from '@/app/[locale]/_util/news';
import {Stack, Typography} from "@mui/material";
import Timestamp from "@/app/[locale]/_util/components/timestamp";
import useWindow from "@/app/[locale]/_util/use-window";
import Link from "next/link";

const newsAmount = [
    {
        min: 1,
        amount: 1
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

export default function OtherRecent(
    {
        news
    }: {
        news: string
    }
) {
    const newsArr = JSON.parse(news) as News[];
    const windowWidth = useWindow().innerWidth;
    return (
        <Stack className="w-2/3 h-full" direction="column">
            {newsArr.slice(0, newsAmount.find(({min}) => windowWidth >= min)?.amount ?? 2).map((news, index) => (
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