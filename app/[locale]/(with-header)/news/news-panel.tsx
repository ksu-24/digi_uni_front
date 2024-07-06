"use client"

import React, {Suspense, useEffect, useState} from "react";
import {NewsPreview} from "@/app/model/news";
import screens from "@/resources/screens.json";
import useWindow from "@/app/_util/use-window";
import {Stack, Typography} from "@mui/material";
import Timestamp from "@/app/_util/components/timestamp";
import Grid from "@mui/material/Unstable_Grid2";
import {create} from "zustand";
import {useLocale} from "next-intl";
import {useGet} from "@/app/_util/fetching-client";

const pageSizeFactors = {
    xs: 1,
    sm: 2,
    xl: 3,
    "3xl": 4
};

const lcm = 12;

const cache = new Map<number, NewsPreview[]>();

export function useNewsPreview(pageSize: number, pageNumber: number): NewsPreview[] {
    const locale = useLocale();
    const indicateExhaustion = useNewsState(state => state.indicateExhaustion);
    const response = useGet(`/publications/previews`, {}, {
        size: pageSize,
        page: pageNumber,
        sort: "createdAt",
        language: locale.toUpperCase(),
        type: "NEWS"
    }, !cache.has(pageNumber));

    if (cache.has(pageNumber)) {
        return cache.get(pageNumber) as NewsPreview[];
    }

    if (response.error) {
        console.error(response.error);
        return [];
    }

    if (response.data.length < pageSize) {
        indicateExhaustion(response.data.length > 0 ? pageNumber : pageNumber - 1);
    }

    return response.data.map((news: any) => new NewsPreview(news.publicationId, news.topic, news.createdAt, news.description, news.image));
}

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
    const news = useNewsPreview(lcm, page);

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
        news: NewsPreview,
        colspan: number;
    }
) {
    return (
        <Grid xs={colspan}>
            <Stack className="gap-10">
                <img src={news.image} alt={news.title}/>
                <Stack className="gap-8">
                    <Typography variant="h4">{news.title}</Typography>
                    <Typography variant="body1">{news.description}</Typography>
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

export const useNewsState = create<{
    isExhausted: boolean,
    lastPage: number,
    indicateExhaustion: (lastPage: number) => void
}>((set, getState) => ({
    isExhausted: false,
    lastPage: 0,
    indicateExhaustion: (lastPage) => {
        if (!getState().isExhausted) {
            set({
                isExhausted: true,
                lastPage
            });
        }
    }
}));

export default function NewsPanel() {
    const [pages, setPages] = useState(2);
    const stackRef = React.useRef<HTMLDivElement | null>(null);
    const {
        isExhausted,
        lastPage,
    } = useNewsState(state => {
        return {
            isExhausted: state.isExhausted,
            lastPage: state.lastPage
        }
    });

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

        if (isExhausted) {
            setPages(lastPage + 1);
            window.removeEventListener("scroll", handleScroll);
            return;
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    }, [isExhausted]);

    console.log(pages);

    return (
        <Stack ref={stackRef}>
            {
                Array.from({length: pages}, (_, i) => (
                    <Suspense fallback="123">
                        <NewsListItem key={i} page={i}/>
                    </Suspense>
                ))
            }
        </Stack>
    )
}