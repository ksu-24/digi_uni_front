import News from '@/app/types/news';
import {Stack, Typography} from "@mui/material";
import Timestamp from "@/app/_util/components/timestamp";
import {Link} from "@/app/_localization/navigation";

export default function OtherRecent(
    {
        news
    }: {
        news: string
    }
) {
    const newsArr = JSON.parse(news) as News[];
    const newsAmount = 3;
    return (
        <Stack className="w-[46%] gap-[3dvw]
        max-xs:w-full max-xs:!gap-[8dvw]
        2xl:w-[44%]
        3xl:gap-[2dvw]
        " direction="column">
            {newsArr.slice(0, newsAmount).map((news, index) => (
                <NewsVisualization key={index} news={news}/>
            ))}
        </Stack>
    )
}

function NewsVisualization(
    {
        news
    }: {
        news: News
    }) {
    return (
        <Stack className="w-full border-t-[1px] gap-4 border-themed-gray
        " direction="column" sx={{
            "&.MuiStack-root::before": {
                content: "''",
            }
        }}>
            <Timestamp date={news.date}/>
            <Link href={`/news/${news.id}`} className="max-w-[95%] h-full">
                <Typography variant="h5" className="hover:text-themed-blue
                max-xs:!text-[20px]
                max-lg:text-[18px] max-lg:leading-[1.3]
                ">{news.title}</Typography>
            </Link>
        </Stack>
    )
}