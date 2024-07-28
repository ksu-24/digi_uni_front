import {get} from "@/app/_util/fetching";
import {Stack, Typography} from "@mui/material";
import {getTranslations, unstable_setRequestLocale} from "next-intl/server";
import {ReadOnlyEditor} from "@/app/[locale]/(with-header)/news/editor/editor";
import Timestamp from "@/app/_util/components/timestamp";
import {getNewsPreview} from "@/app/model/news";
import {Link} from "@/app/_localization/navigation";
import SubscribeForm from "@/app/[locale]/(with-header)/news/subscribe";
import {BaseWrapper} from "@/app/_util/components/base-wrapper";
import {Gallery} from "@/app/[locale]/(with-header)/news/editor/gallery";

async function OtherRecent(
    {
        excludeId
    }: {
        excludeId: number
    }
) {
    const news = await getNewsPreview(6, 0);
    const translations = await getTranslations("news");
    return (
        <Stack>
            <Typography variant="h4" className="mb-6">{translations("otherNews")}</Typography>
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
        </Stack>
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
        },
        gallery?: {
            image: string
        }[]
    };

    return (
        <BaseWrapper>
            <Stack className="gap-9 w-full">
                <Typography variant="h1">{response.preview.title}</Typography>
                <Timestamp date={response.preview.createdAt}/>
                <Stack className="lg:gap-20 w-full" direction="row">
                    <Stack className="w-full lg:w-3/4 min-w-3/4 flex-shrink-0 gap-9">
                        <img src={response.preview.image.image} alt="Preview" width="100%" className="mb-10"/>
                        <ReadOnlyEditor editorStateJson={response.content}/>
                        {response.gallery && <Gallery images={response.gallery.map(img => img.image)}/>}
                    </Stack>
                    <Stack className="hidden lg:block">
                        <OtherRecent excludeId={response.id}/>
                    </Stack>
                </Stack>
                <SubscribeForm/>
            </Stack>
        </BaseWrapper>
    );
}