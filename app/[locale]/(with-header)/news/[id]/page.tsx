import {get} from "@/app/_util/fetching";
import {Stack, Typography} from "@mui/material";
import {unstable_setRequestLocale} from "next-intl/server";
import {ReadOnlyEditor} from "@/app/[locale]/(with-header)/news/editor/editor";
import Timestamp from "@/app/_util/components/timestamp";
import {getNewsPreview} from "@/app/model/news";
import {Link} from "@/app/_localization/navigation";

async function OtherRecent(
    {
        excludeId
    } : {
        excludeId: number
    }
) {
    const news = await getNewsPreview(6, 0);
    return (
        <>
            {
                news
                    .filter(news => news.id !== excludeId)
                    .slice(0, 5)
                    .map((news, index) => (
                    <Stack key={index} className="border-y-[1px] border-info gap-6 border-collapse" sx={{
                        "&.MuiStack-root::before, &.MuiStack-root::after": {
                            content: "''",
                        }
                    }}>
                        <Timestamp date={news.date}/>
                        <Link href={`/news/${news.id}`}>
                            <Typography variant="h4" fontSize={18} lineHeight={1.5}
                                        className="hover:text-themed-blue">{news.title}</Typography>
                        </Link>
                    </Stack>
                ))
            }
        </>
    );
}

export default async function NewsPage({params}: {
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
    const response = await news.json() as {
        id: number,
        content: string,
        preview: {
            title: string,
            createdAt: string,
            image: {
                image: string,

            }
        }
    };
    return (
        <Stack className="gap-9">
            <Typography variant="h1">{response.preview.title}</Typography>
            <Timestamp date={response.preview.createdAt}/>
            <Stack className="gap-[9dvw]" direction="row">
                <Stack className="w-2/3 gap-9">
                    <img src={response.preview.image.image} alt="Preview" width="100%"/>
                    <ReadOnlyEditor editorStateJson={response.content}/>
                </Stack>
                <Stack className="w-1/3">
                    <OtherRecent excludeId={response.id}/>
                </Stack>
            </Stack>
        </Stack>
    );
}