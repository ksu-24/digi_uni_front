import type {MetadataRoute} from "next";
import {get} from "@/app/_util/fetching";
import {locales} from "@/app/_localization/i18n";
import {SITE_URL} from "@/app/_util/seo";

const STATIC_PATHS = ["", "/about", "/news", "/contacts"];

type PreviewsResponse = {
    previews: {
        id: number,
        createdAt: string
    }[],
    pagesLeft: number
};

async function getAllNews(): Promise<PreviewsResponse["previews"]> {
    const all: PreviewsResponse["previews"] = [];
    let page = 0;
    let pagesLeft = 1;

    while (pagesLeft > 0 && page < 100) {
        const response = await get(`/publications/previews`, {
            size: 100,
            page: page,
            sort: "createdAt,desc",
            language: "UK",
            type: "NEWS"
        });
        if (!response.ok) break;

        const data = await response.json() as PreviewsResponse;
        all.push(...data.previews);
        pagesLeft = data.pagesLeft;
        page++;
    }

    return all;
}

function localizedEntry(path: string, lastModified?: Date): MetadataRoute.Sitemap[number][] {
    return locales.map(locale => ({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: lastModified ?? new Date(),
        alternates: {
            languages: Object.fromEntries(
                locales.map(l => [l, `${SITE_URL}/${l}${path}`])
            )
        }
    }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const news = await getAllNews();

    return [
        ...STATIC_PATHS.flatMap(path => localizedEntry(path)),
        ...news.flatMap(item => localizedEntry(`/news/${item.id}`, new Date(item.createdAt)))
    ];
}
