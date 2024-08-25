import {Stack, Typography} from "@mui/material";
import {NewsPreview} from "@/app/types/news";
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
        <Link href={`/news/${news.id}`} className="xs:h-full w-[46%]
        max-xs:w-full
        2xl:w-[48%]
        ">
            <Stack className="h-full w-full gap-[3dvw] items-start
            2xl:gap-[2dvw]
            ">
                <img src={news.image} alt={news.title} width="100%" className="aspect-video 2xl:object-cover"/>
                <Stack className="h-fit w-full gap-4">
                    <Timestamp date={news.date}/>
                    <Typography variant="h4" className="
                    max-xs:!text-[20px]
                    max-lg:text-[22px]
                    xl:w-[90%]
                    2xl:w-[85%] 2xl:!tracking-normal
                    " lineHeight={1.4}>{news.title}</Typography>
                </Stack>
            </Stack>
        </Link>
    )
}