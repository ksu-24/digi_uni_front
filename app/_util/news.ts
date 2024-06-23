export default class News {
    readonly id: number;
    readonly title: string;
    readonly date: string;
    readonly image: string;


    constructor(id: number, title: string, date: string, image: string) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.image = image;
    }
}

export async function getNews(pageSize?: number): Promise<News[]> {
    const image = "/images/main/mock-news-img.png";
    return [
        new News(0, "First news", "2022-10-13", image),
        new News(1, "Second news", "2022-10-11", image),
        new News(2, "Third news", "2022-10-12", image),
        new News(3, "Fourth news", "2022-10-13", image),
        new News(4, "Fifth news", "2022-10-14", image),
        new News(5, "Sixth news", "2022-10-15", image),
        new News(6, "Seventh news", "2022-10-16", image),
        new News(7, "Eighth news", "2022-10-17", image),
        new News(8, "Ninth news", "2022-10-18", image),
        new News(9, "Tenth news", "2022-10-19", image),
    ];
}