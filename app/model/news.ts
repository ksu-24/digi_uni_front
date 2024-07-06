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
    readonly image?: string;
    readonly description: string;

    constructor(id: number, title: string, date: string | Date, description: string, image?: string) {
        this.id = id;
        this.title = title;
        this.date = new Date(date);
        this.image = image;
        this.description = description;
    }
}

export async function getNewsPreview(pageSize: number, pageNumber: number): Promise<News[]> {
    const locale = await getLocale();
    const response = await get(`/publications/previews`, {
        pageSize,
        pageNumber,
        sort: "createdAt",
        language: locale.toUpperCase(),
        type: "NEWS"
    });

    if (!response.ok) {
        console.error(response.status + " " + await response.text());
        return [];
    }

    const data = await response.json();

    return data.map((news: any) => new News(news.publicationId, news.title, news.createdAt, news.image, news.content));
}