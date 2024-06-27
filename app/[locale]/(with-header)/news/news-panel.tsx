"use client"

import React, {Suspense, useEffect, useState} from "react";
import News, {useNews} from "@/app/_util/news";
import screens from "@/resources/screens.json";
import useWindow from "@/app/_util/use-window";
import {Stack, Typography} from "@mui/material";
import Timestamp from "@/app/_util/components/timestamp";
import Grid from "@mui/material/Unstable_Grid2";

const pageSizeFactors = {
    xs: 1,
    sm: 2,
    xl: 3,
    "3xl": 4
};

const lcm = 60;

const rowsPerPage = 3;

function NewsListItem(
    {
        page
    }: {
        page: number;
    }
) {

    function getRowSize(width: number) {
        return pageSizeFactors[
            (
                Object.entries(screens)
                    .filter(([key, _]) => pageSizeFactors[key as never])
                    .findLast(([_, width1]) => width >= parseInt(width1))?.[0] ?? "xs") as never];
    }

    const windowWidth = useWindow().innerWidth;
    const [rowSize, setRowSize] = useState(getRowSize(windowWidth));
    const news = useNews(rowSize * rowsPerPage, page);

    useEffect(() => {
        setRowSize(getRowSize(windowWidth));
    }, [windowWidth]);

    return (
        <Grid container columns={lcm} spacing="3%">
            {news.map((news) => (
                <NewsCard key={news.id} news={news} colspan={lcm / rowSize}/>
            ))}
        </Grid>
    )
}

function NewsCard(
    {
        news,
        colspan
    }: {
        news: News;
        colspan: number;
    }
) {
    return (
        <Grid xs={colspan}>
            <Stack className="gap-10">
                <img src={news.image} alt={news.title}/>
                <Stack className="gap-8">
                    <Typography variant="h4">{news.title}</Typography>
                    <Timestamp date={news.date} format={{
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                    }}/>
                </Stack>
            </Stack>
        </Grid>
    )
}

export default function NewsPanel() {
    const [pages, setPages] = useState(2);
    const stackRef = React.useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function getHandleScroll() {
            let y = window.scrollY;
            return function () {
                if (y < window.scrollY && stackRef.current) {
                    const rect = stackRef.current.getBoundingClientRect();
                    if (rect.bottom < window.innerHeight * 1.5) {
                        setPages((pages) => pages + 1);
                    }
                }
                y = window.scrollY;
            }
        }

        const handleScroll = getHandleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    }, []);

    return (
        <Suspense fallback="Loading...">
            <Stack ref={stackRef}>
                {
                    Array.from({length: pages}, (_, i) => (
                        <NewsListItem key={i} page={i}/>
                    ))
                }
            </Stack>
        </Suspense>
    )
}