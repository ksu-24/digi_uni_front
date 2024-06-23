import {Box, Stack, Typography} from "@mui/material";
import News from "@/app/_util/news";
import Image from "next/image";
import Timestamp from "@/app/_util/components/timestamp";

export default function Last(
    {
        news
    }: {
        news: News
    }
) {
    return (
        <Stack className="h-full w-2/5 gap-8 items-start">
            <Box className="relative w-full h-1/2 flex justify-start">
                <Image src={news.image} alt={news.title} fill className="object-contain object-left"/>
            </Box>
            <Stack className="h-fit w-full gap-7 mt-2">
                <Timestamp date={news.date}/>
                <Typography variant="h4">{news.title}</Typography>
            </Stack>
        </Stack>
    )
}