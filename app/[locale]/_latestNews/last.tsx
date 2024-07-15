import {Stack, Typography} from "@mui/material";
import {NewsPreview} from "@/app/model/news";
import Timestamp from "@/app/_util/components/timestamp";
import {Link} from "@/app/_localization/navigation";

export default function Last(
    {
        news
    }: {
        news: NewsPreview
    }
) {
    if (!news) return null;
    return (
        <Link href={`/news/${news.id}`} className="h-full w-2/5">
            <Stack className="h-full w-full gap-8 items-start">
                <img src={news.image} alt={news.title} width="100%"/>
                <Stack className="h-fit w-full gap-7 mt-2">
                    <Timestamp date={news.date}/>
                    <Typography variant="h4">{news.title}</Typography>
                </Stack>
            </Stack>
        </Link>
    )
}