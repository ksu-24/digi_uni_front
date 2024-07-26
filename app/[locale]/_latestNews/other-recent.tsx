import News from '@/app/model/news';
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
        <Stack className="w-full xs:w-2/3 xs:h-full" direction="column">
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
        <Stack className="w-full h-full border-t-[1px] border-[#AAAAAD] gap-5" direction="column" sx={{
            "&.MuiStack-root::before, &.MuiStack-root::after": {
                content: "''",
            }
        }}>
            <Timestamp date={news.date}/>
            <Link href={`/news/${news.id}`} className="w-full h-full">
                <Typography variant="h5" className="hover:text-themed-blue">{news.title}</Typography>
            </Link>
        </Stack>
    )
}