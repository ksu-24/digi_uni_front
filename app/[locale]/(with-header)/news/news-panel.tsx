"use client"

import React, {Suspense, useEffect, useState} from "react";
import {NewsPreview} from "@/app/types/news";
import {Box, Skeleton, Stack, Typography} from "@mui/material";
import Timestamp from "@/app/_util/components/timestamp";
import {create} from "zustand";
import {useLocale} from "next-intl";
import {useGet} from "@/app/_util/fetching-client";
import {Link} from "@/app/_localization/navigation";
import colors from "@/resources/colors.json"
import EnterAnimation from "@/app/_util/components/enter-animation";
import screens from "@/resources/screens.json";

const lcm = 12;

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

    if (response.data.pagesLeft === 0) {
        indicateExhaustion(response.data.previews.length > 0 ? pageNumber : pageNumber - 1);
    }

    return response.data.previews.map((news: any) => new NewsPreview(news.id, news.title, news.createdAt, news.summary, news.image.image));
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
        <Box className="gap-y-16 w-full gap-x-6 grid
        max-xs:!gap-y-12
        max-lg:gap-x-8
        xl:gap-x-8
        " sx={{
            gridTemplateRows: "auto",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridAutoColumns: "1fr",
            [`@media (max-width: ${screens.lg})`]: {
                gridTemplateColumns: "1fr 1fr",
            },
            [`@media (max-width: ${screens.xs})`]: {
                gridTemplateColumns: "1fr",
            }
        }}>
            {news.map((news) => (
                <NewsCard key={news.id} news={news}/>
            ))}
        </Box>
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
        <>
            <Link href={`/news/${news.id}`} className="h-full block max-w-full">
                <Stack className="gap-[2dvw]
                max-xs:!gap-[5dvw]
                max-lg:gap-[3dvw]
                xl:gap-[1.5dvw]
                3xl:gap-[1dvw]
                h-full" sx={{
                    "&.MuiStack-root:hover .MuiTypography-h4": {
                        color: colors.blue
                    }
                }}>
                    <Box className="aspect-video w-full relative flex items-center overflow-hidden">
                        <img src={news.image} alt={news.title} className="object-cover" height="100%"/>
                    </Box>
                    <Stack className="gap-4
                    max-xs:!gap-[2dvw]
                    max-lg:gap-[1.5dvw]
                    ">
                        <Timestamp date={news.date}/>
                        <Typography variant="h4" fontSize={20} lineHeight={1.3}>{news.title}</Typography>
                    </Stack>
                </Stack>
            </Link>
        </>
    )
}

function NewsListItemSkeleton() {
    return (
        <Box className="gap-y-16 w-full gap-x-6 grid
        max-xs:!gap-y-12
        max-lg:gap-x-8
        xl:gap-x-8
        " sx={{
            gridTemplateRows: "auto",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridAutoColumns: "1fr",
            [`@media (max-width: ${screens.lg})`]: {
                gridTemplateColumns: "1fr 1fr",
            },
            [`@media (max-width: ${screens.xs})`]: {
                gridTemplateColumns: "1fr",
            }
        }}>
            {Array.from({length: lcm}, (_, i) => (
                <NewsCardSkeleton key={i}/>
            ))}
        </Box>
    )
}

function NewsCardSkeleton() {
    return (
        <Stack className="h-full block max-w-full">
            <Skeleton variant="rectangular" width="100%" className="!h-auto !aspect-video w-full"/>
            <Stack className="gap-4
                max-xs:!gap-[2dvw]
                max-lg:gap-[1.5dvw]
                ">
                <Skeleton variant="text" width="20%" className="mt-10"/>
                <Skeleton variant="text" width="100%"/>
            </Stack>
        </Stack>
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

    return (
        <EnterAnimation direction="up" className="mt-[4dvw] mb-[7dvw]
        max-lg:mt-[6dvw]
        2xl:mt-[3dvw] 2xl:mb-[5dvw]
        3xl:mb-[5dvw]
        " delay={200} duration={1000} fadeDuration={400} offset={20}>
            <Stack ref={stackRef} className="gap-16
            max-xs:!gap-12
            ">
                {
                    Array.from({length: pages}, (_, i) => (
                        <Suspense fallback={<NewsListItemSkeleton/>} key={i}>
                            <NewsListItem page={i}/>
                        </Suspense>
                    ))
                }
            </Stack>
        </EnterAnimation>
    )
}