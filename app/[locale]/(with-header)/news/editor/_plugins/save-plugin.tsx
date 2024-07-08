import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import {Button, Typography} from "@mui/material";
import {post} from "@/app/_util/fetching";
import {$generateHtmlFromNodes} from "@lexical/html";
import {useRouter} from "@/app/_localization/navigation";
import React from "react";
import {toBase64} from "@/app/_util/components/image-dropzone";

export default function SavePlugin(
    {
        previewFormRef
    } : {
        previewFormRef: React.RefObject<HTMLFormElement | null>
    }
) {
    const [editor] = useLexicalComposerContext();
    const router = useRouter();

    return (
        <Button className="w-1/5 text-black hover:text-white" variant="contained" onClick={async () => {
            if (!previewFormRef.current) return;

            let editorHtml: string;

            editor.update(() => {
                editorHtml = $generateHtmlFromNodes(editor);
            });

            const formData = new FormData(previewFormRef.current);

            const response = await post("/publications?type=NEWS", {
                language: "UK",
                preview: {
                    title: formData.get("title") as string,
                    summary: formData.get("summary") as string,
                    image: await toBase64(formData.get("image") as File)
                },
                content: editorHtml!
            });
            if (!response.ok) {
                console.error(response.status + " " + await response.text());
                return;
            }
            localStorage.removeItem("editorState");
            const id = (await response.json()).id;
            router.push("/news/" + id);
        }}>
            <Typography>Save</Typography>
        </Button>
    )
}