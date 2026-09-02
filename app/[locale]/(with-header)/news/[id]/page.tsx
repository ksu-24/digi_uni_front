import {get} from "@/app/_util/fetching";
import {Stack, Typography} from "@mui/material";
import {getTranslations, unstable_setRequestLocale} from "next-intl/server";
import {ReadOnlyEditor} from "@/app/[locale]/(with-header)/admin/editor/editor";
import Timestamp from "@/app/_util/components/timestamp";
import {getNewsPreview} from "@/app/types/news";
import {Link} from "@/app/_localization/navigation";
import SubscribeForm from "@/app/[locale]/(with-header)/news/subscribe";
import {BaseWrapper, PageTopWrapper} from "@/app/_util/components/wrappers";
import {Gallery} from "@/app/[locale]/(with-header)/admin/editor/gallery";
import screens from "@/resources/screens.json";
import Breadcrumbs from "@/app/_util/components/breadcrumbs";
import EnterAnimation from "@/app/_util/components/enter-animation";
import ShareButtons from "@/app/[locale]/(with-header)/news/share-buttons";
import NewsViewTracker from "@/app/_util/analytics/news-view-tracker";
import {buildAlternates, extractTextFromEditorState, SITE_NAME, SITE_URL} from "@/app/_util/seo";
import type {Metadata} from "next";

type Publication = {
    id: number,
    content: string,
    preview: {
        title: string,
        summary?: string | null,
        createdAt: string,
        image: {
            image: string,
            alt?: string | null
        }
    },
    gallery?: {
        image: string
    }[]
};

async function fetchPublication(id: string, locale: string): Promise<Publication | null> {
    const response = await get(`/publications/${id}?language=${locale.toUpperCase()}`);
    if (!response.ok) {
        console.error(response.status + " " + await response.text());
        return null;
    }
    return await response.json() as Publication;
}

export async function generateMetadata({params}: {
    params: {
        id: string,
        locale: string
    }
}): Promise<Metadata> {
    const news = await fetchPublication(params.id, params.locale);
    if (!news) return {};

    const description = news.preview.summary
        ?? extractTextFromEditorState(news.content)
        ?? "";
    const url = `${SITE_URL}/${params.locale}/news/${params.id}`;

    return {
        title: news.preview.title,
        description: description,
        alternates: buildAlternates(params.locale, `/news/${params.id}`),
        openGraph: {
            type: "article",
            siteName: SITE_NAME,
            title: news.preview.title,
            description: description,
            url: url,
            publishedTime: news.preview.createdAt,
            locale: params.locale === "uk" ? "uk_UA" : "en_US",
            images: [
                {
                    url: news.preview.image.image,
                    alt: news.preview.image.alt ?? news.preview.title
                }
            ]
        },
        twitter: {
            card: "summary_large_image",
            title: news.preview.title,
            description: description,
            images: [news.preview.image.image]
        }
    };
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

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        headline: response.preview.title,
        image: [response.preview.image.image],
        datePublished: response.preview.createdAt,
        inLanguage: params.locale,
        mainEntityOfPage: `${SITE_URL}/${params.locale}/news/${response.id}`,
        publisher: {
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
            />
            <NewsViewTracker newsId={response.id} title={response.preview.title} locale={params.locale}/>
            <PageTopWrapper className="justify-between !mb-0 !pb-0">
                <Stack className="max-xs:gap-[4dvw]">
                    <Stack className="gap-6
                max-xs:mt-[10dvw]
                xl:gap-[2dvw]
                2xl:gap-[1.5dvw]
                ">
                        <Breadcrumbs/>
                        <Stack className="gap-[2dvw]
                    max-xs:!gap-[6dvw]
                    max-lg:gap-[3dvw]
                    2xl:gap-[1.5dvw]
                    ">
                            <EnterAnimation direction="up" fadeDuration={0.4} duration={1000}>
                                <Typography
                                    variant="h1" lineHeight={1.15} letterSpacing={"-0.01rem"}
                                    className="
                            max-md:!max-w-full
                            max-lg:!leading-[1.2] max-lg:max-w-[80dvw]
                            xl:text-[50px]
                            2xl:text-[54px]
                            3xl:text-[56px] 3xl:max-w-[52dvw]
                            "
                                    sx={{
                                        fontSize: 52,
                                        [`@media (max-width: ${screens.lg})`]: {
                                            fontSize: 40
                                        },
                                        [`@media (max-width: ${screens.md})`]: {
                                            fontSize: 34
                                        },
                                        [`@media (max-width: ${screens.xs})`]: {
                                            fontSize: 32
                                        }
                                    }}>
                                    {response.preview.title}
                                </Typography>
                            </EnterAnimation>
                            <EnterAnimation direction="up" offset={0} delay={800} duration={500}>
                                <Timestamp date={response.preview.createdAt} textProps={{
                                    className: "mt-0"
                                }}/>
                            </EnterAnimation>
                        </Stack>
                    </Stack>
                    <Stack
                        className="w-full mt-[4dvw]
                            max-lg:mt-[6dvw]
                            lg:gap-20
                            3xl:mt-[2dvw]
                            "
                        direction="row">
                        <Stack className="max-w-[68%] gap-[4dvw]
                            max-lg:max-w-full
                            3xl:gap-[2dvw]
                            ">
                            <EnterAnimation direction="up" className="w-full" delay={200} fadeDuration={400}
                                            duration={1000}>
                                <Stack className="gap-[4dvw]
                                          max-xs:gap-[8dvw]
                                          3xl:gap-[2dvw]
                                          ">
                                    <img src={response.preview.image.image} alt="Preview" width="100%"
                                         className="mb-[1dvw] aspect-video"/>
                                    <ReadOnlyEditor editorStateJson={response.content}/>
                                </Stack>
                            </EnterAnimation>
                            {response.gallery && response.gallery.length > 0 &&
                                <Gallery images={response.gallery.map(img => img.image)}/>
                            }
                            <Share/>
                        </Stack>
                        <OtherRecent excludeId={response.id}/>
                    </Stack>
                </Stack>
            </PageTopWrapper>
            <BaseWrapper className="max-xs:!w-full">
                <SubscribeForm/>
            </BaseWrapper>
        </>
    )
}

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
        <EnterAnimation
            direction="up"
            className="w-full max-w-[27%] hidden lg:block
                2xl:max-w-[25%]
                3xl:max-w-[26%]
                " delay={200} fadeDuration={400}
            duration={1000}>
            <Stack className="w-full">
                <Typography variant="h5" className="mb-6
            3xl:mb-[1dvw]
            " letterSpacing={"-0.01rem"}>
                    {translations("otherNews")}
                </Typography>
                {
                    news
                        .filter(news => news.id !== excludeId)
                        .slice(0, 5)
                        .map((news, index) => (
                            <Stack key={index} className="border-y-[1px] border-info border-collaps pb-[1dvw]
                        2xl:pb-0
                        3xl:pb-[1dvw]
                        e">
                                <Stack className="gap-[1.5dvw] pb-[3dvw]
                            2xl:pb-[1.5dvw]
                            3xl:gap-[1dvw] 3xl:pb-[0.5dvw]
                            " sx={{
                                    "&.MuiStack-root::before": {
                                        content: "''",
                                    },
                                }}>
                                    <Stack className="gap-[1dvw]
                                    2xl:gap-[0.5dvw]
                                    3xl:gap-2
                                    ">
                                        <Timestamp date={news.date} textProps={{
                                            className: "!mt-0"
                                        }}/>
                                        <Link href={`/news/${news.id}`}>
                                            <Typography variant="h6" lineHeight={1.4}
                                                        className="hover:text-themed-blue">{news.title}</Typography>
                                        </Link>
                                    </Stack>
                                </Stack>
                            </Stack>
                        ))
                }
            </Stack>
        </EnterAnimation>
    );
}

async function Share() {
    const translations = await getTranslations("news");
    return <ShareButtons shareLabel={translations("share")} />;
}