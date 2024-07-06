import {get} from "@/app/_util/fetching";
import {Box, Typography} from "@mui/material";
import {unstable_setRequestLocale} from "next-intl/server";

export default async function NewsPage({params} : {
    params: {
        id: string,
        locale: string
    }
}) {
    unstable_setRequestLocale(params.locale);

    const news = await get(`/publications/${params.id}?language=${params.locale.toUpperCase()}`);
    if (!news.ok) {
        console.error(news.status + " " + await news.text());
        return <Typography variant="h1">Something went wrong</Typography>
    }
    const response = await news.json() as {content: string};
    return (
        <Box className="mb-10 w-full h-full" dangerouslySetInnerHTML={{
            __html: response.content
        }} component="div"/>
    )
}