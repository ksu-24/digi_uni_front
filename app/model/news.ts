import {getLocale} from "next-intl/server";
import {get} from "@/app/_util/fetching";

export default class News {
    readonly id: number;
    readonly title: string;
    readonly content: string;
    readonly date: Date;


    constructor(id: number, title: string, date: string | Date, image: string, content: string) {
        this.id = id;
        this.title = title;
        this.date = new Date(date);
        this.content = content;
    }
}

export class NewsPreview {
    readonly id: number;
    readonly title: string;
    readonly date: Date;
    readonly image: string;
    readonly summary: string;

    constructor(id: number, title: string, date: string | Date, description: string, image: string) {
        this.id = id;
        this.title = title;
        this.date = new Date(date);
        this.image = image;
        this.summary = description;
    }
}

export async function getNewsPreview(pageSize: number, pageNumber: number): Promise<NewsPreview[]> {
    const locale = await getLocale();
    const response = await get(`/publications/previews`, {
        size: pageSize,
        page: pageNumber,
        sort: "createdAt",
        desc: true,
        language: locale.toUpperCase(),
        type: "NEWS"
    });

    if (!response.ok) {
        console.error(response.status + " " + await response.text());
        return [];
    }

    const data = await response.json() as (Omit<NewsPreview, "image"> & {
        image: {
            image: string
        }
    })[];

    return data.map((news: any) => new NewsPreview(news.id, news.title, news.createdAt, news.summary, news.image.image));
}