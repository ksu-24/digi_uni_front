"use client"

import React, {Suspense, useEffect, useState} from "react";
import {NewsPreview} from "@/app/model/news";
import {Box, Skeleton, Stack, Typography} from "@mui/material";
import Timestamp from "@/app/_util/components/timestamp";
import Grid from "@mui/material/Unstable_Grid2";
import {create} from "zustand";
import {useLocale} from "next-intl";
import {useGet} from "@/app/_util/fetching-client";
import {Link} from "@/app/_localization/navigation";
import colors from "@/resources/colors.json"
import screens from "@/resources/screens.json";
import useWindow from "@/app/_util/use-window";
import Image from "next/image";

const lcm = 12;

const pageSizeFactors = {
    xs: lcm,
    sm: lcm/2,
    xl: lcm/3,
    "3xl": lcm/4
};

const cache = new Map<number, NewsPreview[]>();

setInterval(() => {
    cache.clear();
}, 1000 * 60 * 5); // 5 minutes

export function useNewsPreview(pageSize: number, pageNumber: number): NewsPreview[] {
    const locale = useLocale();
    const indicateExhaustion = useNewsState(state => state.indicateExhaustion);
    const response = useGet(`/publications/previews`, {}, {
        size: pageSize,
        page: pageNumber,
        sort: "createdAt",
        desc: true,
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

    return response.data.map((news: any) => new NewsPreview(news.id, news.title, news.createdAt, news.summary, news.image.image));
}

function NewsListItem(
    {
        page
    }: {
        page: number;
    }
) {


    const news = useNewsPreview(lcm, page);

    return (
        <Grid container columns={lcm} spacing="3%">
            {news.map((news) => (
                <NewsCard key={news.id} news={news}/>
            ))}
        </Grid>
    )
}

function NewsCard(
    {
        news,
    }: {
        news: NewsPreview,
    }
) {
    return (
        <Grid {...pageSizeFactors}>
            <Link href={`/news/${news.id}`} className="h-full block">
                <Stack className="gap-10 justify-between h-full" sx={{
                    "&.MuiStack-root:hover .MuiTypography-h4": {
                        color: colors.blue
                    }
                }}>
                    <Box className="h-1/2 min-h-[50%] max-h-[50%] w-full relative flex items-center overflow-hidden">
                        <img src={news.image} alt={news.title} className="object-cover" height="100%"/>
                    </Box>
                    <Stack className="gap-8">
                        <Timestamp date={news.date}/>
                        <Typography variant="h4">{news.title}</Typography>
                    </Stack>
                </Stack>
            </Link>
        </Grid>
    )
}

function NewsListItemSkeleton() {
    return (
        <Grid container columns={lcm} spacing="3%">
            {Array.from({length: lcm}, (_, i) => (
                <NewsCardSkeleton key={i}/>
            ))}
        </Grid>
    )
}

function NewsCardSkeleton() {
    return (
        <Grid {...pageSizeFactors}>
            <Stack className="gap-10">
                <Skeleton variant="rectangular" width="100%" height="25vh"/>
                <Stack className="gap-8">
                    <Skeleton variant="text" width="100%"/>
                    <Skeleton variant="text" width="100%"/>
                    <Skeleton variant="text" width="100%"/>
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

    function getRowSize(width: number) {
        return pageSizeFactors[
            (
                Object.entries(screens)
                    .filter(([key, _]) => pageSizeFactors[key as never])
                    .findLast(([_, width1]) => width >= parseInt(width1))?.[0] ?? "xs") as never];
    }

    const windowWidth = useWindow().innerWidth;
    const [rowSize, setRowSize] = useState(getRowSize(windowWidth));

    useEffect(() => {
        setRowSize(getRowSize(windowWidth));
    }, [windowWidth]);

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

    return (
        <Stack ref={stackRef}>
            {
                Array.from({length: pages}, (_, i) => (
                    <Suspense fallback={<NewsListItemSkeleton/>} key={i}>
                        <NewsListItem page={i}/>
                    </Suspense>
                ))
            }
        </Stack>
    )
}