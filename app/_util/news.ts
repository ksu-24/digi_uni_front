export default class News {
    readonly id: number;
    readonly title: string;
    readonly content: string;
    readonly date: Date;
    readonly image: string;


    constructor(id: number, title: string, date: string | Date, image: string, content: string) {
        this.id = id;
        this.title = title;
        this.date = new Date(date);
        this.image = image;
        this.content = content;
    }
}

const mock1000News = Array.from({length: 1000}, (_, i) =>
    new News(
        i,
        `News ${i}`,
        new Date(new Date().getTime() - Math.abs(Math.round(Math.random() * 3.154e+7 * 5))),
        "/images/main/mock-news-img.png",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    )
);

export async function getNewsPreview(pageSize = 9, pageNumber = 0): Promise<News[]> {
    return mock1000News.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize);
}

export function useNews(pageSize = 9, pageNumber = 0, condition = true) {
    return mock1000News.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize);
}