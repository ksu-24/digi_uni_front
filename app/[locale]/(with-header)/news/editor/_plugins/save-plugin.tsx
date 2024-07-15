import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import {Button, Typography} from "@mui/material";
import {post} from "@/app/_util/fetching";
import {useRouter} from "@/app/_localization/navigation";
import React from "react";
import {toBase64} from "@/app/_util/components/image-dropzone";
import {locales} from "@/app/_localization/i18n";
import {LexicalEditor} from "lexical";
import {$generateHtmlFromNodes} from "@lexical/html";

export default function SavePlugin(
    {
        localizations,
        stateKeys,
    } : {
        localizations: Map<string, {
            preview: {
                title: string,
                summary: string,
                image: string
            },
            content: string
        }>,
        stateKeys: string[]
    }
) {
    const router = useRouter();

    return (
        <Button className="w-1/5 text-black hover:text-white" variant="contained" onClick={async () => {
            const localizationsArr = [] as {
                language: string,
                preview: {
                    title: string,
                    summary: string,
                    image: string
                },
                content: string
            }[]

            for (const locale of locales) {
                if (localizations.get(locale)!.content) {
                    const localeRecord = localizations.get(locale)!;

                    localizationsArr.push({
                        language: locale.toUpperCase(),
                        preview: localeRecord.preview,
                        content: localeRecord.content
                    });
                }
            }

            const response = await post("/publications?type=NEWS", {localizations: localizationsArr});
            if (!response.ok) {
                console.error(response.status + " " + await response.text());
                return;
            }
            const id = (await response.json()).id;
            router.push("/news/" + id);
        }}>
            <Typography>Save</Typography>
        </Button>
    )
}