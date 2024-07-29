import {Button, Typography} from "@mui/material";
import {patch, post} from "@/app/_util/fetching";
import {useRouter} from "@/app/_localization/navigation";
import React from "react";
import {locales} from "@/app/_localization/i18n";
import {Localization} from "@/app/[locale]/(with-header)/news/editor/editor";

export default function SavePlugin(
    {
        localizations,
        stateKeys,
        id
    }: {
        localizations: Map<string, Localization>,
        stateKeys: string[],
        id?: number
    }
) {
    const router = useRouter();

    return (
        <Button className="w-1/5 text-black hover:text-white" variant="contained" onClick={async () => {
            const localizationsArr = [] as (Localization & { language: string })[]

            for (const locale of locales) {
                if (localizations.get(locale)!.content) {
                    const localeRecord = localizations.get(locale)!;

                    localizationsArr.push({
                        language: locale.toUpperCase(),
                        preview: localeRecord.preview,
                        content: localeRecord.content,
                        gallery: localeRecord.gallery.filter(value => value !== null)
                    });
                }
            }

            const response = id ? await patch("/publications/" + id, {localizations: localizationsArr}) :
                await post("/publications?type=NEWS", {localizations: localizationsArr});

            if (!response.ok) {
                console.error(response.status + " " + await response.text());
                return;
            }

            for (const key of stateKeys) {
                localStorage.removeItem("editorState-preview-title-" + key);
                localStorage.removeItem("editorState-preview-image-" + key);
                localStorage.removeItem("editorState-" + key);
            }

            const responseId = (await response.json()).id;
            router.push("/news/" + responseId);
        }}>
            <Typography>Save</Typography>
        </Button>
    )
}