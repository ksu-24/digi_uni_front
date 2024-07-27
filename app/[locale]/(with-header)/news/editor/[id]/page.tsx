import {get} from "@/app/_util/fetching";
import {NoSsr, Typography} from "@mui/material";
import {unstable_setRequestLocale} from "next-intl/server";
import Editor, {Localization} from "@/app/[locale]/(with-header)/news/editor/editor";
import {DefaultWrapper} from "@/app/_util/components/default-wrapper";

export default async function Page({params}: {
    params: {
        id: string,
        locale: string
    }
}) {
    unstable_setRequestLocale(params.locale);

    const publication = await get(`/publications/${params.id}`);
    if (!publication.ok) {
        console.error(publication.status + " " + await publication.text());
        return <Typography variant="h1">Something went wrong</Typography>
    }
    const response = await publication.json() as {
        id: number,
        localizations: {
            [locale: string]: Localization & {
                preview: {
                    image: {
                        image: string
                    }
                },
                gallery: {
                    image: string
                }[]
            }
        }
    };

    for (const [_, localization] of Object.entries(response.localizations)) {
        // @ts-ignore
        localization.preview.image = localization.preview.image.image;
        // @ts-ignore
        localization.gallery = localization.gallery.map(value => value.image);
    }

    return (
        <DefaultWrapper>
            <NoSsr>
                <Editor
                    initialState={new Map(Object.entries(response.localizations).map(([key, value]) => [key.toLowerCase() as "uk" | "en", value]))}
                    id={response.id}/>
            </NoSsr>
        </DefaultWrapper>
    );
}