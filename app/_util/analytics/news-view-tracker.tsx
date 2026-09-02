'use client'

import {useEffect} from "react";
import {event} from "@/app/_util/analytics/gtag";

/**
 * Надсилає в Google Analytics подію перегляду конкретної новини,
 * щоб у статистиці було видно перегляди за кожною публікацією.
 */
export default function NewsViewTracker(
    {
        newsId,
        title,
        locale
    }: {
        newsId: number,
        title: string,
        locale: string
    }
) {
    useEffect(() => {
        event("news_view", {
            news_id: newsId,
            news_title: title,
            language: locale
        });
    }, [newsId, title, locale]);

    return null;
}
